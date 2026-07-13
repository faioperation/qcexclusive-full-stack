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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsLinkService = void 0;
const prisma_1 = require("../../db_connection/prisma");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const config_1 = __importDefault(require("../../config"));
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const db = prisma_1.prisma;
const N8N_WEBHOOK_URL = config_1.default.N8N_WEBHOOK_URL;
const LOREM_IPSUM_MARKER = "lorem ipsum";
const normalizePosts = (raw) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const source = Array.isArray(raw) ? raw[0] : raw;
    let extracted = (_g = (_f = (_e = (_d = (_b = (_a = source === null || source === void 0 ? void 0 : source.output) === null || _a === void 0 ? void 0 : _a.Posts) !== null && _b !== void 0 ? _b : (_c = source === null || source === void 0 ? void 0 : source.output) === null || _c === void 0 ? void 0 : _c.posts) !== null && _d !== void 0 ? _d : source === null || source === void 0 ? void 0 : source.Posts) !== null && _e !== void 0 ? _e : source === null || source === void 0 ? void 0 : source.posts) !== null && _f !== void 0 ? _f : source === null || source === void 0 ? void 0 : source["output.Posts"]) !== null && _g !== void 0 ? _g : source === null || source === void 0 ? void 0 : source["output.posts"];
    if (!extracted) {
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, `No posts found in n8n response. Raw: ${JSON.stringify(raw)}`);
    }
    // single object → array
    if (!Array.isArray(extracted)) {
        extracted = [extracted];
    }
    const posts = extracted;
    const normalized = posts.map((entry, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const heading = String((_b = (_a = entry.heading) !== null && _a !== void 0 ? _a : entry.title) !== null && _b !== void 0 ? _b : `Post ${(_c = entry.post_number) !== null && _c !== void 0 ? _c : index + 1}`).trim();
        const body = String((_f = (_e = (_d = entry.content) !== null && _d !== void 0 ? _d : entry.body) !== null && _e !== void 0 ? _e : entry.caption) !== null && _f !== void 0 ? _f : "").trim();
        const imageUrl = String((_j = (_h = (_g = entry.image) !== null && _g !== void 0 ? _g : entry.imageUrl) !== null && _h !== void 0 ? _h : entry.image_link) !== null && _j !== void 0 ? _j : "").trim() || null;
        const thumbnailUrl = String((_l = (_k = entry.thumbnail) !== null && _k !== void 0 ? _k : entry.thumbnailUrl) !== null && _l !== void 0 ? _l : "").trim() || null;
        const imageAlt = String((_o = (_m = entry.alt) !== null && _m !== void 0 ? _m : entry.imageAlt) !== null && _o !== void 0 ? _o : "").trim() || null;
        return {
            heading,
            body,
            imageUrl,
            thumbnailUrl,
            imageAlt,
        };
    });
    if (normalized.length === 0) {
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, "n8n returned empty posts array");
    }
    const hasLoremIpsum = normalized.some((p) => p.heading.toLowerCase().includes(LOREM_IPSUM_MARKER) ||
        p.body.toLowerCase().includes(LOREM_IPSUM_MARKER));
    if (hasLoremIpsum) {
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, "n8n returned placeholder lorem ipsum content");
    }
    const invalidPosts = normalized.filter((p) => !p.body);
    if (invalidPosts.length > 0) {
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, `Some generated posts are missing content`);
    }
    return normalized;
};
const callN8nWebhook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!N8N_WEBHOOK_URL) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "N8N_WEBHOOK_URL is not configured");
    }
    let response;
    try {
        response = yield fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
        });
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, `Failed to connect to n8n webhook: ${error === null || error === void 0 ? void 0 : error.message}`);
    }
    if (!response.ok) {
        const text = yield response.text().catch(() => "");
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, `n8n webhook returned ${response.status}: ${text}`);
    }
    let rawData;
    try {
        rawData = yield response.json();
        console.log("n8n raw response:", JSON.stringify(rawData, null, 2));
    }
    catch (_a) {
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, "Invalid JSON returned from n8n");
    }
    return normalizePosts(rawData);
});
const createDocsLinkInDB = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { postGenerate = 1, name, projectName, docsLink: docsLinkUrl, prompt } = payload, rest = __rest(payload, ["postGenerate", "name", "projectName", "docsLink", "prompt"]);
    const generatedPosts = yield callN8nWebhook({
        name,
        projectName,
        docsLink: docsLinkUrl,
        prompt,
        postGenerate: Number(postGenerate),
    });
    const result = yield db.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const docsLink = yield tx.docsLink.create({
            data: Object.assign({ name,
                projectName, docsLink: docsLinkUrl, prompt, postGenerate: Number(postGenerate), createdById: userId }, rest),
        });
        yield tx.mediaPost.createMany({
            data: generatedPosts.map((post) => ({
                heading: post.heading,
                body: post.body,
                imageUrl: post.imageUrl,
                thumbnailUrl: post.thumbnailUrl,
                imageAlt: post.imageAlt,
                postTime: new Date(),
                status: "Draft",
                docsLinkId: docsLink.id,
            })),
        });
        return docsLink;
    }));
    return result;
});
const getAllDocsLinksFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const qb = new QueryBuilder_1.QueryBuilder(query)
        .search(["name", "projectName"])
        .filter()
        .sort()
        .paginate();
    const [result, total] = yield Promise.all([
        db.docsLink.findMany(Object.assign(Object.assign({}, qb.build()), { include: {
                _count: {
                    select: {
                        posts: true,
                    },
                },
            } })),
        db.docsLink.count({
            where: qb.where,
        }),
    ]);
    return {
        meta: qb.getMeta(total),
        data: result,
    };
});
const getPostsByDocsLinkIdFromDB = (docsLinkId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const docsLink = yield db.docsLink.findUnique({
        where: {
            id: docsLinkId,
        },
    });
    if (!docsLink) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Docs link not found");
    }
    const where = {
        docsLinkId,
    };
    if (status && status !== "All") {
        where.status = status;
    }
    const posts = yield db.mediaPost.findMany({
        where,
        orderBy: {
            createdAt: "desc",
        },
    });
    return {
        docsLink,
        posts,
    };
});
const deleteDocsLinkFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const docsLink = yield tx.docsLink.findUnique({
            where: { id },
        });
        if (!docsLink) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Docs link not found");
        }
        yield tx.mediaPost.deleteMany({
            where: {
                docsLinkId: id,
            },
        });
        yield tx.docsLink.delete({
            where: {
                id,
            },
        });
        return docsLink;
    }));
});
const getAllPostsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const qb = new QueryBuilder_1.QueryBuilder(query)
        .search(["heading", "body"])
        .filter()
        .sort()
        .paginate();
    const [result, total] = yield Promise.all([
        db.mediaPost.findMany(Object.assign(Object.assign({}, qb.build()), { include: {
                docsLink: {
                    select: {
                        id: true,
                        name: true,
                        projectName: true,
                    },
                },
            }, orderBy: {
                createdAt: "desc",
            } })),
        db.mediaPost.count({
            where: qb.where,
        }),
    ]);
    return {
        meta: qb.getMeta(total),
        data: result,
    };
});
const updatePostStatusInDB = (postId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield db.mediaPost.findUnique({
        where: {
            id: postId,
        },
    });
    if (!post) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Post not found");
    }
    return db.mediaPost.update({
        where: {
            id: postId,
        },
        data: {
            status,
        },
    });
});
exports.DocsLinkService = {
    createDocsLinkInDB,
    getAllDocsLinksFromDB,
    getPostsByDocsLinkIdFromDB,
    getAllPostsFromDB,
    deleteDocsLinkFromDB,
    updatePostStatusInDB,
};
