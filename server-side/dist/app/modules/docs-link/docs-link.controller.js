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
exports.DocsLinkController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const docs_link_service_1 = require("./docs-link.service");
const http_status_1 = __importDefault(require("http-status"));
const createDocsLink = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield docs_link_service_1.DocsLinkService.createDocsLinkInDB(req.body, req.user.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Docs link created and sample posts generated successfully",
        data: result,
    });
}));
const getAllDocsLinks = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield docs_link_service_1.DocsLinkService.getAllDocsLinksFromDB(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Docs links fetched successfully",
        meta: result.meta,
        data: result.data,
    });
}));
const getPostsByDocsLinkId = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const status = req.query.status;
    const result = yield docs_link_service_1.DocsLinkService.getPostsByDocsLinkIdFromDB(req.params.id, status);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Posts fetched successfully",
        data: result,
    });
}));
const deleteDocsLink = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield docs_link_service_1.DocsLinkService.deleteDocsLinkFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Docs link and all its posts deleted successfully",
        data: result,
    });
}));
const getAllPosts = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield docs_link_service_1.DocsLinkService.getAllPostsFromDB(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All posts fetched successfully",
        meta: result.meta,
        data: result.data,
    });
}));
const updatePostStatus = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    const { status } = req.body;
    const result = yield docs_link_service_1.DocsLinkService.updatePostStatusInDB(postId, status);
    (0, sendResponse_1.sendResponse)(res, { statusCode: http_status_1.default.OK, success: true, message: "Post status updated", data: result });
}));
exports.DocsLinkController = {
    createDocsLink,
    getAllDocsLinks,
    getPostsByDocsLinkId,
    getAllPosts,
    deleteDocsLink,
    updatePostStatus
};
