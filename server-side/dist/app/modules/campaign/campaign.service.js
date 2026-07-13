"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma_2 = require("../../db_connection/prisma");
const apify_1 = require("../../utils/apify");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const db = prisma_2.prisma;
// ─── Map campaign.platform string → EPlatform enum + Apify platform key ──────
const resolvePlatform = (campaignPlatform) => {
    const p = (campaignPlatform !== null && campaignPlatform !== void 0 ? campaignPlatform : "").toLowerCase();
    if (p === "instagram")
        return { apifyPlatform: "Instagram", dbPlatform: prisma_1.EPlatform.Instagram };
    if (p === "facebook")
        return { apifyPlatform: "Facebook", dbPlatform: prisma_1.EPlatform.Facebook };
    // Default → GoogleMaps (also handles "googlemaps", "google_maps", etc.)
    return { apifyPlatform: "GoogleMaps", dbPlatform: prisma_1.EPlatform.GoogleMaps };
};
// ─── Strip backtick decorations ───────────────────────────────────────────────
const strip = (v) => typeof v === "string" ? v.replace(/[`]/g, "").trim() || null : null;
// ─── Per-platform item → lead field mapper ────────────────────────────────────
const mapItemToLead = (item, platform) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    if (platform === "GoogleMaps") {
        const emails = Array.isArray(item.emails) ? item.emails : item.email ? [item.email] : [];
        return {
            name: (item.title || item.name || "Unknown Business").trim(),
            email: (_a = strip(emails[0])) !== null && _a !== void 0 ? _a : null,
            phone: strip(item.phone || item.phoneNumber),
            platformUrl: strip(item.url),
            imageUrl: strip(item.imageUrl || item.thumbnailUrl),
            website: strip(item.website || item.url),
            totalScore: (_c = (_b = item.totalScore) !== null && _b !== void 0 ? _b : item.rating) !== null && _c !== void 0 ? _c : null,
            category: item.categoryName || item.category || null,
            city: item.city || ((_d = item.addressParsed) === null || _d === void 0 ? void 0 : _d.city) || "Unknown",
            state: item.state || ((_e = item.addressParsed) === null || _e === void 0 ? void 0 : _e.state) || "N/A",
            country: item.country || ((_f = item.addressParsed) === null || _f === void 0 ? void 0 : _f.country) || "US",
        };
    }
    if (platform === "Instagram") {
        // scraper-mind~instagram-email-scraper output fields:
        // title, url, snippet, email, email_domain, platform, displayed_url
        return {
            name: (_g = strip(item.title || item.username || item.name)) !== null && _g !== void 0 ? _g : "Instagram Profile",
            email: strip(item.email),
            phone: null,
            platformUrl: strip(item.url || item.profileUrl),
            imageUrl: strip(item.profilePic || item.imageUrl),
            website: strip(item.website || item.externalUrl),
            totalScore: (_j = (_h = item.followersCount) !== null && _h !== void 0 ? _h : item.followers) !== null && _j !== void 0 ? _j : null,
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
            name: (_k = strip(item.title || item.name || item.pageName)) !== null && _k !== void 0 ? _k : "Facebook Page",
            email: strip(item.email),
            phone: strip(item.phone || item.phoneNumber),
            platformUrl: strip(item.url || item.pageUrl),
            imageUrl: strip(item.profileImage || item.imageUrl),
            website: strip(item.website),
            totalScore: (_m = (_l = item.likes) !== null && _l !== void 0 ? _l : item.followers) !== null && _m !== void 0 ? _m : null,
            category: Array.isArray(item.categories) ? item.categories[0] : item.category || null,
            city: item.city || ((_o = item.address) === null || _o === void 0 ? void 0 : _o.city) || "Unknown",
            state: item.state || ((_p = item.address) === null || _p === void 0 ? void 0 : _p.state) || "N/A",
            country: item.country || ((_q = item.address) === null || _q === void 0 ? void 0 : _q.country) || "US",
        };
    }
    return null;
};
// ─── Create Campaign ──────────────────────────────────────────────────────────
const createCampaignInDB = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const campaign = yield db.campaign.create({
        data: Object.assign(Object.assign({}, payload), { createdById: userId, status: prisma_1.ECampaignStatus.Active }),
    });
    const { apifyPlatform, dbPlatform } = resolvePlatform(campaign.platform);
    console.log(`[Campaign ${campaign.id}] Platform resolved: ${apifyPlatform}`);
    try {
        let profileRun = null;
        let emailRun = null;
        // ─────────────────────────────────────────────
        // GOOGLE MAPS
        // ─────────────────────────────────────────────
        if (apifyPlatform === "GoogleMaps") {
            profileRun = yield (0, apify_1.triggerApifyScraper)({
                platform: "GoogleMaps",
                location: campaign.location,
                industry: campaign.industry,
                specification: campaign.specification,
                maxItems: 100,
            });
        }
        // ─────────────────────────────────────────────
        // INSTAGRAM
        // ─────────────────────────────────────────────
        else if (apifyPlatform === "Instagram") {
            const runs = yield (0, apify_1.triggerInstagramScrapers)({
                platform: "Instagram",
                location: campaign.location,
                industry: campaign.industry,
                specification: campaign.specification,
                maxItems: 100,
            });
            profileRun = runs.profileRun;
            emailRun = runs.emailRun;
        }
        // ─────────────────────────────────────────────
        // FACEBOOK
        // ─────────────────────────────────────────────
        else if (apifyPlatform === "Facebook") {
            const runs = yield (0, apify_1.triggerFacebookScrapers)({
                platform: "Facebook",
                location: campaign.location,
                industry: campaign.industry,
                specification: campaign.specification,
                maxItems: 100,
            });
            profileRun = runs.profileRun;
            emailRun = runs.emailRun;
        }
        console.log(`[Campaign ${campaign.id}] Profile Run: ${profileRun === null || profileRun === void 0 ? void 0 : profileRun.runId}`);
        if (emailRun) {
            console.log(`[Campaign ${campaign.id}] Email Run: ${emailRun === null || emailRun === void 0 ? void 0 : emailRun.runId}`);
        }
        // Save dataset
        if ((profileRun === null || profileRun === void 0 ? void 0 : profileRun.datasetId) &&
            profileRun.datasetId !== "unknown") {
            yield db.campaign.update({
                where: {
                    id: campaign.id,
                },
                data: {
                    apifyDatasetId: profileRun.datasetId,
                },
            });
        }
        // Create scraping job
        const scrapingJob = yield db.scrapingJob.create({
            data: {
                campaignId: campaign.id,
                platform: dbPlatform,
                status: prisma_1.EScrapingJobStatus.Running,
                targetQuery: [
                    campaign.industry,
                    campaign.specification,
                    campaign.location,
                ]
                    .filter(Boolean)
                    .join(" in "),
                startedAt: new Date(),
            },
        });
        // Background processing
        processScrapingResults(campaign.id, scrapingJob.id, {
            profileRunId: profileRun.runId,
            emailRunId: (_a = emailRun === null || emailRun === void 0 ? void 0 : emailRun.runId) !== null && _a !== void 0 ? _a : null,
        }, apifyPlatform);
        return campaign;
    }
    catch (error) {
        console.error(`[Campaign ${campaign.id}] Failed to trigger Apify:`, error.message);
        return campaign;
    }
});
// ─── Background: poll → fetch → create leads ─────────────────────────────────
const processScrapingResults = (campaignId, jobId, runData, apifyPlatform) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log(`[Job ${jobId}] Waiting for Apify profile run ${runData.profileRunId} (${apifyPlatform})...`);
        const profileRunResult = yield (0, apify_1.waitForApifyRun)(runData.profileRunId);
        let emailRunResult = null;
        if (runData.emailRunId) {
            console.log(`[Job ${jobId}] Waiting for Apify email run ${runData.emailRunId}`);
            emailRunResult =
                yield (0, apify_1.waitForApifyRun)(runData.emailRunId);
        }
        console.log(`[Job ${jobId}] Run finished: ${profileRunResult.status}`);
        const campaignRecord = yield db.campaign.findUnique({ where: { id: campaignId } });
        if (profileRunResult.status !== "SUCCEEDED") {
            if (!(campaignRecord === null || campaignRecord === void 0 ? void 0 : campaignRecord.apifyDatasetId)) {
                yield db.scrapingJob.update({
                    where: { id: jobId },
                    data: { status: prisma_1.EScrapingJobStatus.Failed, errorLog: `Run status: ${profileRunResult.status}`, completedAt: new Date() },
                });
                return;
            }
            console.warn(`[Job ${jobId}] Run failed, using fallback dataset: ${campaignRecord.apifyDatasetId}`);
        }
        // Fetch items — prefer run's datasetId, fallback to saved one
        let items = [];
        const primaryDatasetId = profileRunResult.status === "SUCCEEDED"
            ? profileRunResult.datasetId
            : campaignRecord === null || campaignRecord === void 0 ? void 0 : campaignRecord.apifyDatasetId;
        try {
            items = yield (0, apify_1.getDatasetItems)(primaryDatasetId);
        }
        catch (e) {
            if ((campaignRecord === null || campaignRecord === void 0 ? void 0 : campaignRecord.apifyDatasetId) && campaignRecord.apifyDatasetId !== primaryDatasetId) {
                items = yield (0, apify_1.getDatasetItems)(campaignRecord.apifyDatasetId);
            }
            else {
                throw e;
            }
        }
        if (!items || items.length === 0) {
            console.warn(`[Job ${jobId}] 0 items returned. Check actor inputs for ${apifyPlatform}.`);
            yield db.scrapingJob.update({
                where: { id: jobId },
                data: { status: prisma_1.EScrapingJobStatus.Completed, leadsFound: 0, leadsExtracted: 0, completedAt: new Date() },
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
            if (!mapped)
                continue;
            // Upsert Industry
            let industryId = null;
            if (mapped.category) {
                try {
                    const ind = yield db.industry.upsert({
                        where: { name: mapped.category },
                        update: {},
                        create: { name: mapped.category },
                    });
                    industryId = ind.id;
                }
                catch (e) { /* non-fatal */ }
            }
            // Upsert Location
            let locationId = null;
            try {
                const loc = yield db.location.upsert({
                    where: { city_state_country: { city: mapped.city, state: mapped.state, country: mapped.country } },
                    update: {},
                    create: { city: mapped.city, state: mapped.state, country: mapped.country },
                });
                locationId = loc.id;
            }
            catch (e) { /* non-fatal */ }
            // Create Lead
            try {
                const lead = yield db.lead.create({
                    data: {
                        name: mapped.name,
                        email: mapped.email,
                        phone: mapped.phone,
                        platform: dbPlatform, // ✅ correct per-platform value
                        platformUrl: mapped.platformUrl,
                        imageUrl: mapped.imageUrl,
                        website: mapped.website,
                        totalScore: mapped.totalScore,
                        status: prisma_1.ELeadStatus.Completed,
                        campaignId,
                        scrapingJobId: jobId,
                        industryId,
                        locationId,
                    },
                });
                leadsExtracted++;
                console.log(`[Job ${jobId}] Lead: ${lead.name} | ${(_a = mapped.email) !== null && _a !== void 0 ? _a : "no email"} | ${apifyPlatform}`);
            }
            catch (leadErr) {
                console.error(`[Job ${jobId}] Lead create failed for "${mapped.name}":`, leadErr.message);
            }
        }
        yield db.scrapingJob.update({
            where: { id: jobId },
            data: {
                status: prisma_1.EScrapingJobStatus.Completed,
                leadsFound,
                leadsExtracted,
                completedAt: new Date(),
            },
        });
        console.log(`[Job ${jobId}] Done. Found: ${leadsFound}, Extracted: ${leadsExtracted}`);
    }
    catch (error) {
        console.error(`[Job ${jobId}] Fatal:`, error.message);
        yield db.scrapingJob.update({
            where: { id: jobId },
            data: { status: prisma_1.EScrapingJobStatus.Failed, errorLog: error.message, completedAt: new Date() },
        });
    }
});
const getAllCampaignsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const qb = new QueryBuilder_1.QueryBuilder(query).search(["name"]).filter().sort().paginate();
    const [result, total] = yield Promise.all([
        db.campaign.findMany(qb.build()),
        db.campaign.count({ where: qb.where }),
    ]);
    return { meta: qb.getMeta(total), data: result };
});
const getSingleCampaignFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const campaign = yield db.campaign.findUnique({
        where: { id },
        include: { leads: true, scrapingJobs: true },
    });
    if (!campaign)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Campaign not found");
    return campaign;
});
const deleteCampaignFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const campaign = yield db.campaign.findUnique({ where: { id } });
    if (!campaign)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Campaign not found");
    // Delete child records first to avoid FK constraint issues
    yield db.scrapingJob.deleteMany({ where: { campaignId: id } });
    yield db.outreachMessage.deleteMany({ where: { campaignId: id } });
    yield db.lead.deleteMany({ where: { campaignId: id } });
    yield db.campaign.delete({ where: { id } });
    return campaign;
});
exports.CampaignService = {
    createCampaignInDB,
    getAllCampaignsFromDB,
    getSingleCampaignFromDB,
    deleteCampaignFromDB,
};
