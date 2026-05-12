import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { 
  createCalendlyEvent, 
  updateCalendlyEvent, 
  cancelCalendlyEvent,
  getCalendlyEvent 
} from "../../services/calendly/calendly.service";
import httpStatus from "http-status";
import { Request, Response } from "express";

export interface CalendlyEvent {
  leadId: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  attendees?: number;
}

export interface CalendlyUpdateData {
  title?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  location?: string;
  attendees?: number;
}

const createEvent = catchAsync(async (req: Request, res: Response) => {
  const { leadId, title, description, startTime, endTime, location, attendees } = req.body as any;

  if (!leadId || !title || !startTime || !endTime) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "Missing required fields: leadId, title, startTime, endTime",
      data: null,
    });
  }

  try {
    const result = await createCalendlyEvent({
      leadId,
      title,
      description,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      location,
      attendees: attendees || 1,
    });

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Calendly event created successfully",
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Failed to create Calendly event",
      data: { error: error instanceof Error ? error.message : String(error) },
    });
  }
});

const updateEvent = catchAsync(async (req: Request, res: Response) => {
  const { eventId } = req.params;
  const updates = req.body as CalendlyUpdateData;

  if (!eventId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "Event ID is required",
      data: null,
    });
  }

  try {
    await updateCalendlyEvent(eventId, updates);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Calendly event updated successfully",
      data: null,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Failed to update Calendly event",
      data: { error: error instanceof Error ? error.message : String(error) },
    });
  }
});

const cancelEvent = catchAsync(async (req: Request, res: Response) => {
  const { eventId } = req.params;

  if (!eventId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "Event ID is required",
      data: null,
    });
  }

  try {
    await cancelCalendlyEvent(eventId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Calendly event cancelled successfully",
      data: null,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Failed to cancel Calendly event",
      data: { error: error instanceof Error ? error.message : String(error) },
    });
  }
});

const getEvent = catchAsync(async (req: Request, res: Response) => {
  const { eventId } = req.params;

  if (!eventId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "Event ID is required",
      data: null,
    });
  }

  try {
    const result = await getCalendlyEvent(eventId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Calendly event retrieved successfully",
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Failed to retrieve Calendly event",
      data: { error: error instanceof Error ? error.message : String(error) },
    });
  }
});

export const CalendlyController = {
  createEvent,
  updateEvent,
  cancelEvent,
  getEvent,
};
