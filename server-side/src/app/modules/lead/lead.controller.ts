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

const sendEmailToLead = catchAsync(async (req, res) => {
  const result = await LeadService.sendEmailToLeadInDB(req.params.id as string, req.body.message);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Outreach email sent successfully",
    data: result,
  });
});

const bulkSendEmailToLeads = catchAsync(async (req, res) => {
  const result = await LeadService.bulkSendEmailToLeadsInDB(req.body.leadIds, req.body.message);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bulk outreach emails processed",
    data: result,
  });
});

const getOutreachQueueStatus = catchAsync(async (req, res) => {
  const result = await LeadService.getOutreachQueueStatus();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Outreach queue status fetched successfully",
    data: result,
  });
});

export const LeadController = {
  getAllLeads,
  getSingleLead,
  updateLead,
  deleteLead,
  sendEmailToLead,
  bulkSendEmailToLeads,
  getOutreachQueueStatus,
};
