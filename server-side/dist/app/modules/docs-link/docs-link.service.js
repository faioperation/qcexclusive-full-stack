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
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const db = prisma_1.prisma;
// ─── Sample post headings and bodies for placeholder AI generation ─────────────
const SAMPLE_HEADINGS = [
    "Stunning Before & After Renovation",
    "Modern Kitchen Transformation",
    "Elegant Bathroom Remodel Reveal",
    "Open-Plan Living Space Makeover",
    "Luxury Master Suite Redesign",
    "Outdoor Deck & Patio Upgrade",
    "Custom Cabinetry Showcase",
    "Minimalist Office Renovation",
];
const SAMPLE_BODY = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
// ─── Generate N sample MediaPost records ──────────────────────────────────────
const generateSamplePosts = (docsLinkId, count) => {
    return Array.from({ length: count }, (_, i) => ({
        heading: SAMPLE_HEADINGS[i % SAMPLE_HEADINGS.length],
        body: SAMPLE_BODY,
        postTime: new Date(),
        status: "Draft",
        docsLinkId,
    }));
};
// ─── Create DocsLink + auto-generate posts ────────────────────────────────────
const createDocsLinkInDB = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { postGenerate = 1 } = payload, rest = __rest(payload, ["postGenerate"]);
    const docsLink = yield db.docsLink.create({
        data: Object.assign(Object.assign({}, rest), { postGenerate, createdById: userId }),
    });
    // Generate sample posts (AI placeholder)
    const postsData = generateSamplePosts(docsLink.id, postGenerate);
    yield db.mediaPost.createMany({ data: postsData });
    return docsLink;
});
// ─── Get all DocsLinks (paginated) ────────────────────────────────────────────
const getAllDocsLinksFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const qb = new QueryBuilder_1.QueryBuilder(query).search(["name", "projectName"]).filter().sort().paginate();
    const [result, total] = yield Promise.all([
        db.docsLink.findMany(Object.assign(Object.assign({}, qb.build()), { include: { _count: { select: { posts: true } } } })),
        db.docsLink.count({ where: qb.where }),
    ]);
    return { meta: qb.getMeta(total), data: result };
});
// ─── Get all posts for a specific DocsLink ────────────────────────────────────
const getPostsByDocsLinkIdFromDB = (docsLinkId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const docsLink = yield db.docsLink.findUnique({ where: { id: docsLinkId } });
    if (!docsLink)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Docs link not found");
    const where = { docsLinkId };
    if (status && status !== "All")
        where.status = status;
    const posts = yield db.mediaPost.findMany({
        where,
        orderBy: { createdAt: "desc" },
    });
    return { docsLink, posts };
});
// ─── Delete DocsLink (cascade deletes posts via DB) ───────────────────────────
const deleteDocsLinkFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const docsLink = yield db.docsLink.findUnique({ where: { id } });
    if (!docsLink)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Docs link not found");
    // Manually delete posts first (in case cascade isn't enforced at app level)
    yield db.mediaPost.deleteMany({ where: { docsLinkId: id } });
    yield db.docsLink.delete({ where: { id } });
    return docsLink;
});
// Get all posts across all docs links (for MediaPostsPage pagination & search)
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
            }, orderBy: { createdAt: "desc" } })),
        db.mediaPost.count({ where: qb.where }),
    ]);
    return { meta: qb.getMeta(total), data: result };
});
const updatePostStatusInDB = (postId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield db.mediaPost.findUnique({ where: { id: postId } });
    if (!post)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Post not found");
    const updated = yield db.mediaPost.update({
        where: { id: postId },
        data: { status },
    });
    return updated;
});
exports.DocsLinkService = {
    createDocsLinkInDB,
    getAllDocsLinksFromDB,
    getPostsByDocsLinkIdFromDB,
    getAllPostsFromDB,
    deleteDocsLinkFromDB,
    updatePostStatusInDB
};
