import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { prisma } from "../../db_connection/prisma";
import crypto from "crypto";
import httpStatus from "http-status";
import { Request, Response } from "express";

const db = prisma as any;

/**
 * Verify Calendly webhook signature
 */
function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload, "utf8")
    .digest("hex");
  
  return crypto.timingSafeEqual(signature as any, expectedSignature as any);
}

/**
 * Handle Calendly webhook events
 */
const handleCalendlyWebhook = catchAsync(async (req: Request, res: Response) => {
  const signature = req.headers["calendly-webhook-signature"] as string;
  const payload = JSON.stringify(req.body);
  
  if (!signature || !verifyWebhookSignature(payload, signature, process.env.CALENDLY_WEBHOOK_SECRET || "")) {
    return sendResponse(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      message: "Invalid webhook signature",
      data: null,
    });
  }

  const { event, payload: webhookPayload } = req.body;

  try {
    switch (event) {
      case "invitee.created":
        await handleInviteeCreated(webhookPayload);
        break;
        
      case "invitee.canceled":
        await handleInviteeCanceled(webhookPayload);
        break;
        
      case "event.scheduled":
        await handleEventScheduled(webhookPayload);
        break;
        
      case "event.canceled":
        await handleEventCanceled(webhookPayload);
        break;
        
      case "event.rescheduled":
        await handleEventRescheduled(webhookPayload);
        break;
        
      default:
        console.log(`[CalendlyWebhook] Unhandled event type: ${event}`);
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Webhook processed successfully",
      data: null,
    });
  } catch (error) {
    console.error("[CalendlyWebhook] Error processing webhook:", error);
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Webhook processing failed",
      data: { error: error instanceof Error ? error.message : String(error) },
    });
  }
});

async function handleInviteeCreated(payload: any): Promise<void> {
  const { email, event, uri } = payload;
  
  if (!email || !event) return;
  
  // Find lead by email
  const lead = await db.lead.findFirst({
    where: { 
      email: { equals: email, mode: "insensitive" } 
    },
  });

  if (!lead) {
    console.log(`[CalendlyWebhook] Lead not found for email: ${email}`);
    return;
  }

  // Update lead with Calendly info
  await db.lead.update({
    where: { id: lead.id },
    data: {
      calendlyEventId: event?.uri?.split("/").pop() || "",
      calendlyUri: uri,
      calendlyStatus: "Scheduled" as any,
    },
  });

  console.log(`[CalendlyWebhook] Lead ${lead.id} scheduled meeting via Calendly`);
}

async function handleInviteeCanceled(payload: any): Promise<void> {
  const { email, event } = payload;
  
  if (!email || !event) return;
  
  // Find lead by email
  const lead = await db.lead.findFirst({
    where: { 
      email: { equals: email, mode: "insensitive" } 
    },
  });

  if (!lead) {
    console.log(`[CalendlyWebhook] Lead not found for email: ${email}`);
    return;
  }

  // Update lead status
  await db.lead.update({
    where: { id: lead.id },
    data: {
      calendlyStatus: "Cancelled" as any,
    },
  });

  console.log(`[CalendlyWebhook] Lead ${lead.id} cancelled Calendly meeting`);
}

async function handleEventScheduled(payload: any): Promise<void> {
  const { uri, event } = payload;
  
  if (!uri || !event) return;
  
  // Create Calendly event record
  await db.calendlyEvent.create({
    data: {
      leadId: "", // Will be updated when we have the lead
      eventId: event?.uri?.split("/").pop() || "",
      eventType: "Meeting" as any,
      title: event?.name || "",
      description: event?.description || "",
      startTime: new Date(event?.start_time || ""),
      endTime: new Date(event?.end_time || ""),
      status: "Scheduled" as any,
      calendlyUri: uri,
      meetingLink: event?.location?.join_url || "",
      location: event?.location?.name || "",
      attendees: 1,
    },
  });

  console.log(`[CalendlyWebhook] Event scheduled: ${event?.name}`);
}

async function handleEventCanceled(payload: any): Promise<void> {
  const { event } = payload;
  
  if (!event) return;
  
  // Update event status
  await db.calendlyEvent.updateMany({
    where: { eventId: event?.uri?.split("/").pop() || "" },
    data: {
      status: "Cancelled" as any,
    },
  });

  // Update lead status
  await db.lead.updateMany({
    where: { calendlyEventId: event?.uri?.split("/").pop() || "" },
    data: {
      calendlyStatus: "Cancelled" as any,
      status: "NoShow" as any,
    },
  });

  console.log(`[CalendlyWebhook] Event cancelled: ${event?.name}`);
}

async function handleEventRescheduled(payload: any): Promise<void> {
  const { event } = payload;
  
  if (!event) return;
  
  // Update event
  await db.calendlyEvent.updateMany({
    where: { eventId: event?.uri?.split("/").pop() || "" },
    data: {
      status: "Scheduled" as any,
      isRescheduled: true,
      rescheduledFrom: event?.original_event?.uri?.split("/").pop() || "",
    },
  });

  console.log(`[CalendlyWebhook] Event rescheduled: ${event?.name}`);
}

export { handleCalendlyWebhook };
