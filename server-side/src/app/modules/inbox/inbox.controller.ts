import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { InboxService } from "./inbox.service";
import httpStatus from "http-status";
import { Request, Response } from "express";

import { syncInboxReplies } from "./inbox.sync";

const getMessagesByThreadId = catchAsync(async (req: Request, res: Response) => {
  const { threadId } = req.params;
  const result = await InboxService.getMessagesByThreadIdFromDB(threadId as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Messages fetched successfully",
    data: result,
  });
});

const getAllConversations = catchAsync(async (req: Request, res: Response) => {
  const result = await InboxService.getAllConversationsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Conversations fetched successfully",
    data: result,
  });
});

const syncInbox = catchAsync(async (req: Request, res: Response) => {
  await syncInboxReplies();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Email synchronization completed successfully",
    data: null,
  });
});

export const InboxController = {
  getMessagesByThreadId,
  getAllConversations,
  syncInbox,
};
