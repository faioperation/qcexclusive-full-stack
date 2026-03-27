import {
  ECampaignStatus, EScrapingJobStatus, ELeadStatus, EPlatform,
} from "../../../generated/prisma/client";
import { prisma } from "../../db_connection/prisma";
import { triggerApifyScraper, waitForApifyRun, getDatasetItems } from "../../utils/apify";
import { sendEmail } from "../../utils/sendEmail";
import { QueryBuilder, TQueryInput } from "../../utils/QueryBuilder";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";

const db = prisma as any;

// ─── Map campaign.platform string → EPlatform enum + Apify platform key ──────
const resolvePlatform = (
  campaignPlatform: string
): { apifyPlatform: "GoogleMaps" | "Instagram" | "Facebook"; dbPlatform: EPlatform } => {
  const p = (campaignPlatform ?? "").toLowerCase();

  if (p === "instagram") return { apifyPlatform: "Instagram", dbPlatform: EPlatform.Instagram };
  if (p === "facebook") return { apifyPlatform: "Facebook", dbPlatform: EPlatform.Facebook };

  // Default → GoogleMaps (also handles "googlemaps", "google_maps", etc.)
  return { apifyPlatform: "GoogleMaps", dbPlatform: EPlatform.GoogleMaps };
};

// ─── Strip backtick decorations ───────────────────────────────────────────────
const strip = (v?: string | null): string | null =>
  typeof v === "string" ? v.replace(/[`]/g, "").trim() || null : null;

// ─── Per-platform item → lead field mapper ────────────────────────────────────
const mapItemToLead = (item: any, platform: "GoogleMaps" | "Instagram" | "Facebook") => {
  if (platform === "GoogleMaps") {
    const emails: string[] = Array.isArray(item.emails) ? item.emails : item.email ? [item.email] : [];
    return {
      name: (item.title || item.name || "Unknown Business").trim(),
      email: strip(emails[0]) ?? null,
      phone: strip(item.phone || item.phoneNumber),
      platformUrl: strip(item.url),
      imageUrl: strip(item.imageUrl || item.thumbnailUrl),
      website: strip(item.website || item.url),
      totalScore: item.totalScore ?? item.rating ?? null,
      category: item.categoryName || item.category || null,
      city: item.city || item.addressParsed?.city || "Unknown",
      state: item.state || item.addressParsed?.state || "N/A",
      country: item.country || item.addressParsed?.country || "US",
    };
  }

  if (platform === "Instagram") {
    // scraper-mind~instagram-email-scraper output fields:
    // title, url, snippet, email, email_domain, platform, displayed_url
    return {
      name: strip(item.title || item.username || item.name) ?? "Instagram Profile",
      email: strip(item.email),
      phone: null,
      platformUrl: strip(item.url || item.profileUrl),
      imageUrl: strip(item.profilePic || item.imageUrl),
      website: strip(item.website || item.externalUrl),
      totalScore: item.followersCount ?? item.followers ?? null,
      category: item.category || item.businessCategory || null,
      city: item.city || "Unknown",
      state: item.state || "N/A",
      country: item.country || "US",
    };
  }

  if (platform === "Facebook") {
    // apify~facebook-search-scraper output fields:
    // title/name, url, email, phone, address, website, categories, likes, followers
    return {
      name: strip(item.title || item.name || item.pageName) ?? "Facebook Page",
      email: strip(item.email),
      phone: strip(item.phone || item.phoneNumber),
      platformUrl: strip(item.url || item.pageUrl),
      imageUrl: strip(item.profileImage || item.imageUrl),
      website: strip(item.website),
      totalScore: item.likes ?? item.followers ?? null,
      category: Array.isArray(item.categories) ? item.categories[0] : item.category || null,
      city: item.city || item.address?.city || "Unknown",
      state: item.state || item.address?.state || "N/A",
      country: item.country || item.address?.country || "US",
    };
  }

  return null;
};

// ─── Create Campaign ──────────────────────────────────────────────────────────
const createCampaignInDB = async (payload: any, userId: string) => {
  const campaign = await db.campaign.create({
    data: { ...payload, createdById: userId, status: ECampaignStatus.Active },
  });

  // ✅ Read the platform FROM the campaign, don't hardcode GoogleMaps
  const { apifyPlatform, dbPlatform } = resolvePlatform(campaign.platform);
  console.log(`[Campaign ${campaign.id}] Platform resolved: ${apifyPlatform}`);

  try {
    const apifyRun = await triggerApifyScraper({
      platform: apifyPlatform,
      location: campaign.location,
      industry: campaign.industry,
      specification: campaign.specification,
      maxItems: 100,
    });

    console.log(`[Campaign ${campaign.id}] Apify run: ${apifyRun.runId}`);

    if (apifyRun.datasetId && apifyRun.datasetId !== "unknown") {
      await db.campaign.update({
        where: { id: campaign.id },
        data: { apifyDatasetId: apifyRun.datasetId },
      });
    }

    const scrapingJob = await db.scrapingJob.create({
      data: {
        campaignId: campaign.id,
        platform: dbPlatform,              // ✅ use resolved platform
        status: EScrapingJobStatus.Running,
        targetQuery: [campaign.industry, campaign.specification, campaign.location]
          .filter(Boolean).join(" in "),
        startedAt: new Date(),
      },
    });

    // Non-blocking background processing
    processScrapingResults(campaign.id, scrapingJob.id, apifyRun.runId, apifyPlatform);

    return campaign;
  } catch (error: any) {
    console.error(`[Campaign ${campaign.id}] Failed to trigger Apify:`, error.message);
    return campaign;
  }
};

// ─── Background: poll → fetch → create leads ─────────────────────────────────
const processScrapingResults = async (
  campaignId: string,
  jobId: string,
  runId: string,
  apifyPlatform: "GoogleMaps" | "Instagram" | "Facebook"
) => {
  try {
    console.log(`[Job ${jobId}] Waiting for Apify run ${runId} (${apifyPlatform})...`);
    const runResult = await waitForApifyRun(runId);
    console.log(`[Job ${jobId}] Run finished: ${runResult.status}`);

    const campaignRecord = await db.campaign.findUnique({ where: { id: campaignId } });

    if (runResult.status !== "SUCCEEDED") {
      if (!campaignRecord?.apifyDatasetId) {
        await db.scrapingJob.update({
          where: { id: jobId },
          data: { status: EScrapingJobStatus.Failed, errorLog: `Run status: ${runResult.status}`, completedAt: new Date() },
        });
        return;
      }
      console.warn(`[Job ${jobId}] Run failed, using fallback dataset: ${campaignRecord.apifyDatasetId}`);
    }

    // Fetch items — prefer run's datasetId, fallback to saved one
    let items: any[] = [];
    const primaryDatasetId = runResult.status === "SUCCEEDED"
      ? runResult.datasetId
      : campaignRecord?.apifyDatasetId;

    try {
      items = await getDatasetItems(primaryDatasetId!);
    } catch (e: any) {
      if (campaignRecord?.apifyDatasetId && campaignRecord.apifyDatasetId !== primaryDatasetId) {
        items = await getDatasetItems(campaignRecord.apifyDatasetId);
      } else {
        throw e;
      }
    }

    if (!items || items.length === 0) {
      console.warn(`[Job ${jobId}] 0 items returned. Check actor inputs for ${apifyPlatform}.`);
      await db.scrapingJob.update({
        where: { id: jobId },
        data: { status: EScrapingJobStatus.Completed, leadsFound: 0, leadsExtracted: 0, completedAt: new Date() },
      });
      return;
    }

    console.log(`[Job ${jobId}] Processing ${items.length} items from ${apifyPlatform}`);

    // ✅ Resolve dbPlatform for storing in the Lead record
    const { dbPlatform } = resolvePlatform(apifyPlatform);

    let leadsFound = 0;
    let leadsExtracted = 0;

    for (const item of items) {
      leadsFound++;

      const mapped = mapItemToLead(item, apifyPlatform);
      if (!mapped) continue;

      // Upsert Industry
      let industryId: string | null = null;
      if (mapped.category) {
        try {
          const ind = await db.industry.upsert({
            where: { name: mapped.category },
            update: {},
            create: { name: mapped.category },
          });
          industryId = ind.id;
        } catch (e) { /* non-fatal */ }
      }

      // Upsert Location
      let locationId: string | null = null;
      try {
        const loc = await db.location.upsert({
          where: { city_state_country: { city: mapped.city, state: mapped.state, country: mapped.country } },
          update: {},
          create: { city: mapped.city, state: mapped.state, country: mapped.country },
        });
        locationId = loc.id;
      } catch (e) { /* non-fatal */ }

      // Create Lead
      try {
        const lead = await db.lead.create({
          data: {
            name: mapped.name,
            email: mapped.email,
            phone: mapped.phone,
            platform: dbPlatform,          // ✅ correct per-platform value
            platformUrl: mapped.platformUrl,
            imageUrl: mapped.imageUrl,
            website: mapped.website,
            totalScore: mapped.totalScore,
            status: ELeadStatus.Completed,
            campaignId,
            scrapingJobId: jobId,
            industryId,
            locationId,
          },
        });

        leadsExtracted++;
        console.log(`[Job ${jobId}] Lead: ${lead.name} | ${mapped.email ?? "no email"} | ${apifyPlatform}`);

        // Send outreach email if available
        if (mapped.email && campaignRecord?.firstMessage) {
          try {
            await sendEmail({
              to: mapped.email,
              subject: `Message from ${campaignRecord.name}`,
              tempName: "outreach",
              tempData: { leadName: lead.name, body: campaignRecord.firstMessage },
            });

            await db.outreachMessage.create({
              data: {
                campaignId,
                leadId: lead.id,
                body: campaignRecord.firstMessage,
                type: "Email",
                sentAt: new Date(),
              },
            });

            await db.lead.update({
              where: { id: lead.id },
              data: { status: ELeadStatus.Contacted },
            });
          } catch (mailErr: any) {
            console.error(`[Job ${jobId}] Email send failed to ${mapped.email}:`, mailErr.message);
          }
        }
      } catch (leadErr: any) {
        console.error(`[Job ${jobId}] Lead create failed for "${mapped.name}":`, leadErr.message);
      }
    }

    await db.scrapingJob.update({
      where: { id: jobId },
      data: {
        status: EScrapingJobStatus.Completed,
        leadsFound,
        leadsExtracted,
        completedAt: new Date(),
      },
    });

    console.log(`[Job ${jobId}] Done. Found: ${leadsFound}, Extracted: ${leadsExtracted}`);

  } catch (error: any) {
    console.error(`[Job ${jobId}] Fatal:`, error.message);
    await db.scrapingJob.update({
      where: { id: jobId },
      data: { status: EScrapingJobStatus.Failed, errorLog: error.message, completedAt: new Date() },
    });
  }
};

const getAllCampaignsFromDB = async (query: TQueryInput) => {
  const qb = new QueryBuilder(query).search(["name"]).filter().sort().paginate();
  const [result, total] = await Promise.all([
    db.campaign.findMany(qb.build()),
    db.campaign.count({ where: qb.where }),
  ]);
  return { meta: qb.getMeta(total), data: result };
};

const getSingleCampaignFromDB = async (id: string) => {
  const campaign = await db.campaign.findUnique({
    where: { id },
    include: { leads: true, scrapingJobs: true },
  });
  if (!campaign) throw new ApiError(httpStatus.NOT_FOUND, "Campaign not found");
  return campaign;
};

export const CampaignService = {
  createCampaignInDB,
  getAllCampaignsFromDB,
  getSingleCampaignFromDB,
};