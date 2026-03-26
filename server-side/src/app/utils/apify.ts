import config from "../config";

// ─── Actor IDs ────────────────────────────────────────────────────────────────
// Google Maps: faisalrjbd~google-maps-phone-email-extractor
// Instagram:   scraper-mind~instagram-email-scraper  (keyword + location → emails)
// Facebook:    apify~facebook-search-scraper         (keyword + location → page emails)
const ACTORS = {
  GoogleMaps: "faisalrjbd~google-maps-phone-email-extractor",
  Instagram:  "scraper-mind~instagram-email-scraper",
  Facebook:   "apify~facebook-search-scraper",
} as const;

const getToken = () => {
  const token = config.APIFY_TOKEN;
  if (!token) throw new Error("APIFY_TOKEN is not set in environment variables.");
  return token;
};

export interface TApifyRunResult {
  runId: string;
  datasetId: string;
  status: string;
}

export interface TApifyScrapeParams {
  platform: "GoogleMaps" | "Instagram" | "Facebook";
  location?: string;
  industry?: string;
  specification?: string;
  maxItems?: number;
}

// ─── Build actor input per platform ──────────────────────────────────────────
const buildActorInput = (params: TApifyScrapeParams): object => {
  const maxItems = Math.min(params.maxItems ?? 100, 500);

  // Keywords: combine industry + specification
  const keywords: string[] = [];
  if (params.industry)      keywords.push(params.industry);
  if (params.specification) keywords.push(params.specification);
  if (keywords.length === 0) keywords.push("business");

  if (params.platform === "GoogleMaps") {
    // ✅ Verified input schema from Apify actor UI (Image 3 in original context)
    return {
      searchStringsArray:      keywords,
      locationQuery:           params.location ?? "",
      maxPlacesPerSearch:      maxItems,
      language:                "en",
      skipClosedPlaces:        false,
      placeMinimumStars:       0,
      scrapeEmailsFromWebsites: true,
    };
  }

  if (params.platform === "Instagram") {
    // ✅ Verified input schema: scraper-mind~instagram-email-scraper
    // Fields: keywords (array), location (string), platform (string)
    return {
      keywords:   keywords,
      location:   params.location ?? "",
      platform:   "Instagram",
      proxyConfiguration: { useApifyProxy: true },
    };
  }

  if (params.platform === "Facebook") {
    // ✅ Verified input schema: apify~facebook-search-scraper
    // Fields: queries (array of {query, location}), maxResults
    // Extracts: page URL, address, email, website, phone, category, followers
    return {
      queries: keywords.map((kw) => ({
        query:    params.location ? `${kw} ${params.location}` : kw,
        location: params.location ?? "",
      })),
      maxResults: maxItems,
    };
  }

  throw new Error(`Unsupported platform: ${params.platform}`);
};

// ─── Trigger scraper ──────────────────────────────────────────────────────────
export const triggerApifyScraper = async (
  params: TApifyScrapeParams
): Promise<TApifyRunResult> => {
  const token     = getToken();
  const actorId   = ACTORS[params.platform];
  const actorInput = buildActorInput(params);

  console.log(`[Apify] Triggering ${params.platform} actor (${actorId})`);
  console.log("[Apify] Input:", JSON.stringify(actorInput, null, 2));

  const url  = `https://api.apify.com/v2/acts/${actorId}/runs?token=${token}`;
  const resp = await fetch(url, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(actorInput),
  });

  if (!resp.ok) {
    const errText = await resp.text();
    console.error(`[Apify] Trigger failed [${resp.status}]: ${errText}`);
    throw new Error(`Apify actor trigger failed [${resp.status}]: ${errText}`);
  }

  const result = await resp.json();
  const run    = result?.data;

  console.log(`[Apify] Run created: runId=${run?.id}, datasetId=${run?.defaultDatasetId}, status=${run?.status}`);

  return {
    runId:     run?.id                ?? "unknown",
    datasetId: run?.defaultDatasetId  ?? "unknown",
    status:    run?.status            ?? "CREATED",
  };
};

// ─── Wait for run to finish ───────────────────────────────────────────────────
// Google Maps needs up to 20 min. Instagram/Facebook are faster (~5 min).
export const waitForApifyRun = async (
  runId:     string,
  maxWaitMs: number = 20 * 60 * 1000
): Promise<{ status: string; datasetId: string }> => {
  const token    = getToken();
  const deadline = Date.now() + maxWaitMs;

  while (Date.now() < deadline) {
    const resp = await fetch(`https://api.apify.com/v2/actor-runs/${runId}?token=${token}`);
    if (!resp.ok) throw new Error(`Failed to poll Apify run: ${resp.statusText}`);

    const data   = await resp.json();
    const run    = data?.data;
    const status = run?.status ?? "UNKNOWN";

    console.log(`[Apify] Run ${runId} status: ${status}`);

    if (["SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT"].includes(status)) {
      return { status, datasetId: run?.defaultDatasetId ?? "" };
    }

    await new Promise((res) => setTimeout(res, 8000));
  }

  throw new Error(`Apify run ${runId} timed out after ${maxWaitMs / 60000} minutes.`);
};

// ─── Get dataset items ────────────────────────────────────────────────────────
export const getDatasetItems = async (datasetId: string): Promise<any[]> => {
  const token = getToken();
  const url   = `https://api.apify.com/v2/datasets/${datasetId}/items?token=${token}&clean=true&format=json`;

  console.log(`[Apify] Fetching dataset: ${datasetId}`);
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Failed to fetch dataset [${resp.status}]: ${resp.statusText}`);

  const items = await resp.json();
  console.log(`[Apify] Dataset ${datasetId}: ${items?.length ?? 0} items`);
  return Array.isArray(items) ? items : [];
};

export const getApifyRunStatus = async (runId: string): Promise<string> => {
  const token = getToken();
  const resp  = await fetch(`https://api.apify.com/v2/actor-runs/${runId}?token=${token}`);
  if (!resp.ok) return "UNKNOWN";
  const data  = await resp.json();
  return data?.data?.status ?? "UNKNOWN";
};