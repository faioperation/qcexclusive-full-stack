import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { DocsLinkService } from "./docs-link.service";
import httpStatus from "http-status";
import { Request, Response } from "express";

const createDocsLink = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const result = await DocsLinkService.createDocsLinkInDB(req.body, req.user.id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Docs link created and sample posts generated successfully",
    data: result,
  });
});

const getAllDocsLinks = catchAsync(async (req: Request, res: Response) => {
  const result = await DocsLinkService.getAllDocsLinksFromDB(req.query as any);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Docs links fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getPostsByDocsLinkId = catchAsync(async (req: Request, res: Response) => {
  const status = req.query.status as string | undefined;
  const result = await DocsLinkService.getPostsByDocsLinkIdFromDB(req.params.id as string, status);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Posts fetched successfully",
    data: result,
  });
});

const deleteDocsLink = catchAsync(async (req: Request, res: Response) => {
  const result = await DocsLinkService.deleteDocsLinkFromDB(req.params.id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Docs link and all its posts deleted successfully",
    data: result,
  });
});

const getAllPosts = catchAsync(async (req: Request, res: Response) => {
  const result = await DocsLinkService.getAllPostsFromDB(req.query as any);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All posts fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const updatePostStatus = catchAsync(async (req, res) => {
  const { postId } = req.params;
  const { status } = req.body;
  const result = await DocsLinkService.updatePostStatusInDB(postId as string, status);
  sendResponse(res, { statusCode: httpStatus.OK, success: true, message: "Post status updated", data: result });
});

export const DocsLinkController = {
  createDocsLink,
  getAllDocsLinks,
  getPostsByDocsLinkId,
  getAllPosts,
  deleteDocsLink,
  updatePostStatus
};
