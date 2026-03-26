import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { MeetingService } from "./meeting.service";

const getAllMeetings = catchAsync(async (req: Request, res: Response) => {
  const result = await MeetingService.getAllMeetingsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Meetings fetched successfully",
    data: result,
  });
});

const updateMeeting = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MeetingService.updateMeetingInDB(id as string, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Meeting updated successfully",
    data: result,
  });
});

export const MeetingController = {
  getAllMeetings,
  updateMeeting,
};
