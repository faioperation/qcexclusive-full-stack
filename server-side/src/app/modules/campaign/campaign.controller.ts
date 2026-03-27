import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CampaignService } from "./campaign.service";
import httpStatus from "http-status";
import { Request, Response } from "express";

const createCampaign = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const result = await CampaignService.createCampaignInDB(req.body, req.user.id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Campaign created and scraping started successfully",
    data: result,
  });
});

const getAllCampaigns = catchAsync(async (req: Request, res: Response) => {
  const result = await CampaignService.getAllCampaignsFromDB(req.query as any);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Campaigns fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleCampaign = catchAsync(async (req: Request, res: Response) => {
  const result = await CampaignService.getSingleCampaignFromDB(req.params.id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Campaign fetched successfully",
    data: result,
  });
});

const deleteCampaign = catchAsync(async (req: Request, res: Response) => {
  const result = await CampaignService.deleteCampaignFromDB(req.params.id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Campaign and all associated data deleted successfully",
    data: result,
  });
});

export const CampaignController = {
  createCampaign,
  getAllCampaigns,
  getSingleCampaign,
  deleteCampaign,
};
