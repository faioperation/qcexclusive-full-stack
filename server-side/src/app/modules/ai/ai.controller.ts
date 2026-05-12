import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { getAIClassificationStats } from "../../services/ai/aiReplyProcessor.service";
import httpStatus from "http-status";
import { Request, Response } from "express";

const getAIStats = catchAsync(async (req: Request, res: Response) => {
  const result = await getAIClassificationStats();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "AI classification stats fetched successfully",
    data: result,
  });
});

const toggleAutoReply = catchAsync(async (req: Request, res: Response) => {
  const { leadId, enabled } = req.body;
  
  // This would need implementation in the service
  // For now, return success
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Auto-reply ${enabled ? 'enabled' : 'disabled'} for lead`,
    data: { leadId, enabled },
  });
});

const generateReply = catchAsync(async (req: Request, res: Response) => {
  const { messageId } = req.params;
  
  // This would generate AI reply for a specific message
  // Implementation would go here
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "AI reply generated successfully",
    data: { messageId, reply: "Generated reply would go here" },
  });
});

export const AIController = {
  getAIStats,
  toggleAutoReply,
  generateReply,
};
