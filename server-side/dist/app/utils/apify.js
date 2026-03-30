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
exports.getApifyRunStatus = exports.getDatasetItems = exports.waitForApifyRun = exports.triggerApifyScraper = void 0;
const config_1 = __importDefault(require("../config"));
// ─── Actor IDs ────────────────────────────────────────────────────────────────
// Google Maps: faisalrjbd~google-maps-phone-email-extractor
// Instagram:   scraper-mind~instagram-email-scraper  (keyword + location → emails)
// Facebook:    apify~facebook-search-scraper         (keyword + location → page emails)
const ACTORS = {
    GoogleMaps: "faisalrjbd~google-maps-phone-email-extractor",
    Instagram: "scraper-mind~instagram-email-scraper",
    Facebook: "apify~facebook-search-scraper",
};
const getToken = () => {
    const token = config_1.default.APIFY_TOKEN;
    if (!token)
        throw new Error("APIFY_TOKEN is not set in environment variables.");
    return token;
};
// ─── Build actor input per platform ──────────────────────────────────────────
const buildActorInput = (params) => {
    var _a, _b, _c;
    const maxItems = Math.min((_a = params.maxItems) !== null && _a !== void 0 ? _a : 100, 500);
    // Keywords: combine industry + specification
    const keywords = [];
    if (params.industry)
        keywords.push(params.industry);
    if (params.specification)
        keywords.push(params.specification);
    if (keywords.length === 0)
        keywords.push("business");
    if (params.platform === "GoogleMaps") {
        // ✅ Verified input schema from Apify actor UI (Image 3 in original context)
        return {
            searchStringsArray: keywords,
            locationQuery: (_b = params.location) !== null && _b !== void 0 ? _b : "",
            maxPlacesPerSearch: maxItems,
            language: "en",
            skipClosedPlaces: false,
            placeMinimumStars: 0,
            scrapeEmailsFromWebsites: true,
        };
    }
    if (params.platform === "Instagram") {
        // ✅ Verified input schema: scraper-mind~instagram-email-scraper
        // Fields: keywords (array), location (string), platform (string)
        return {
            keywords: keywords,
            location: (_c = params.location) !== null && _c !== void 0 ? _c : "",
            platform: "Instagram",
            proxyConfiguration: { useApifyProxy: true },
        };
    }
    if (params.platform === "Facebook") {
        // ✅ Verified input schema: apify~facebook-search-scraper
        // Fields: queries (array of {query, location}), maxResults
        // Extracts: page URL, address, email, website, phone, category, followers
        return {
            queries: keywords.map((kw) => {
                var _a;
                return ({
                    query: params.location ? `${kw} ${params.location}` : kw,
                    location: (_a = params.location) !== null && _a !== void 0 ? _a : "",
                });
            }),
            maxResults: maxItems,
        };
    }
    throw new Error(`Unsupported platform: ${params.platform}`);
};
// ─── Trigger scraper ──────────────────────────────────────────────────────────
const triggerApifyScraper = (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const token = getToken();
    const actorId = ACTORS[params.platform];
    const actorInput = buildActorInput(params);
    console.log(`[Apify] Triggering ${params.platform} actor (${actorId})`);
    console.log("[Apify] Input:", JSON.stringify(actorInput, null, 2));
    const url = `https://api.apify.com/v2/acts/${actorId}/runs?token=${token}`;
    const resp = yield fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(actorInput),
    });
    if (!resp.ok) {
        const errText = yield resp.text();
        console.error(`[Apify] Trigger failed [${resp.status}]: ${errText}`);
        throw new Error(`Apify actor trigger failed [${resp.status}]: ${errText}`);
    }
    const result = yield resp.json();
    const run = result === null || result === void 0 ? void 0 : result.data;
    console.log(`[Apify] Run created: runId=${run === null || run === void 0 ? void 0 : run.id}, datasetId=${run === null || run === void 0 ? void 0 : run.defaultDatasetId}, status=${run === null || run === void 0 ? void 0 : run.status}`);
    return {
        runId: (_a = run === null || run === void 0 ? void 0 : run.id) !== null && _a !== void 0 ? _a : "unknown",
        datasetId: (_b = run === null || run === void 0 ? void 0 : run.defaultDatasetId) !== null && _b !== void 0 ? _b : "unknown",
        status: (_c = run === null || run === void 0 ? void 0 : run.status) !== null && _c !== void 0 ? _c : "CREATED",
    };
});
exports.triggerApifyScraper = triggerApifyScraper;
// ─── Wait for run to finish ───────────────────────────────────────────────────
// Google Maps needs up to 20 min. Instagram/Facebook are faster (~5 min).
const waitForApifyRun = (runId_1, ...args_1) => __awaiter(void 0, [runId_1, ...args_1], void 0, function* (runId, maxWaitMs = 20 * 60 * 1000) {
    var _a, _b;
    const token = getToken();
    const deadline = Date.now() + maxWaitMs;
    while (Date.now() < deadline) {
        const resp = yield fetch(`https://api.apify.com/v2/actor-runs/${runId}?token=${token}`);
        if (!resp.ok)
            throw new Error(`Failed to poll Apify run: ${resp.statusText}`);
        const data = yield resp.json();
        const run = data === null || data === void 0 ? void 0 : data.data;
        const status = (_a = run === null || run === void 0 ? void 0 : run.status) !== null && _a !== void 0 ? _a : "UNKNOWN";
        console.log(`[Apify] Run ${runId} status: ${status}`);
        if (["SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT"].includes(status)) {
            return { status, datasetId: (_b = run === null || run === void 0 ? void 0 : run.defaultDatasetId) !== null && _b !== void 0 ? _b : "" };
        }
        yield new Promise((res) => setTimeout(res, 8000));
    }
    throw new Error(`Apify run ${runId} timed out after ${maxWaitMs / 60000} minutes.`);
});
exports.waitForApifyRun = waitForApifyRun;
// ─── Get dataset items ────────────────────────────────────────────────────────
const getDatasetItems = (datasetId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = getToken();
    const url = `https://api.apify.com/v2/datasets/${datasetId}/items?token=${token}&clean=true&format=json`;
    console.log(`[Apify] Fetching dataset: ${datasetId}`);
    const resp = yield fetch(url);
    if (!resp.ok)
        throw new Error(`Failed to fetch dataset [${resp.status}]: ${resp.statusText}`);
    const items = yield resp.json();
    console.log(`[Apify] Dataset ${datasetId}: ${(_a = items === null || items === void 0 ? void 0 : items.length) !== null && _a !== void 0 ? _a : 0} items`);
    return Array.isArray(items) ? items : [];
});
exports.getDatasetItems = getDatasetItems;
const getApifyRunStatus = (runId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = getToken();
    const resp = yield fetch(`https://api.apify.com/v2/actor-runs/${runId}?token=${token}`);
    if (!resp.ok)
        return "UNKNOWN";
    const data = yield resp.json();
    return (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : "UNKNOWN";
});
exports.getApifyRunStatus = getApifyRunStatus;
