import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { LeadService } from "./lead.service";
import httpStatus from "http-status";

const getAllLeads = catchAsync(async (req, res) => {
  const result = await LeadService.getAllLeadsFromDB(req.query as any);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Leads fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleLead = catchAsync(async (req, res) => {
  const result = await LeadService.getSingleLeadFromDB(req.params.id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Lead fetched successfully",
    data: result,
  });
});

const updateLead = catchAsync(async (req, res) => {
    const result = await LeadService.updateLeadInDB(req.params.id as string, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Lead updated successfully",
      data: result,
    });
});

const deleteLead = catchAsync(async (req, res) => {
    const result = await LeadService.deleteLeadFromDB(req.params.id as string);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Lead deleted successfully",
      data: result,
    });
});

export const LeadController = {
  getAllLeads,
  getSingleLead,
  updateLead,
  deleteLead,
};
