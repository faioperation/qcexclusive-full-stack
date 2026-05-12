import { prisma } from "../../db_connection/prisma";
import { processEmailReply, AIReplyGenerationResult } from "./openai.service";
import { sendEmail } from "../../utils/sendEmail";
import { 
  EReplyStatus,
  ELeadStatus 
} from "../../../../generated/prisma";

const db = prisma as any;

interface ProcessReplyParams {
  messageId: string;
  leadId: string;
  campaignId?: string;
  subject: string;
  body: string;
  leadName: string;
  campaignName?: string;
  autoReplyEnabled?: boolean;
}

/**
 * Process incoming email reply with AI classification and optional auto-reply
 */
export async function processIncomingReply(params: ProcessReplyParams): Promise<void> {
  const { messageId, leadId, campaignId, subject, body, leadName, campaignName, autoReplyEnabled } = params;
  
  try {
    // Process with AI
    const aiResult = await processEmailReply(body, subject, leadName, campaignName);
    
    // Update message with AI classification
    await db.outreachMessage.update({
      where: { id: messageId },
      data: {
        aiClassification: aiResult.classification.classification as any,
        aiConfidence: aiResult.classification.confidence,
        aiGeneratedReply: aiResult.reply || null,
        aiResponseStatus: 'Pending' as any,
      },
    });

    // Update lead status based on classification
    await updateLeadStatusBasedOnClassification(leadId, aiResult.classification.classification);

    // Send auto-reply if enabled and appropriate
    if (autoReplyEnabled && shouldSendAutoReply(aiResult.classification.classification, aiResult.reply)) {
      await sendAutoReply(leadId, messageId, leadName, aiResult.reply, campaignName, campaignId);
    }

    // Send Calendly booking link for interested/meeting request leads
    if (['Interested', 'MeetingRequest'].includes(aiResult.classification.classification)) {
      const lead = await db.lead.findUnique({
        where: { id: leadId },
        select: { email: true, name: true }
      });
      await sendCalendlyBookingLink(leadId, lead.email, lead.name, aiResult.classification.classification);
    }

    console.log(`[AIProcessor] Processed reply for lead ${leadId}: ${aiResult.classification.classification} (${aiResult.classification.confidence})`);
  } catch (error) {
    console.error(`[AIProcessor] Failed to process reply for message ${messageId}:`, error);
    throw error;
  }
}

/**
 * Update lead status based on AI classification
 */
async function updateLeadStatusBasedOnClassification(leadId: string, classification: string): Promise<void> {
  let newStatus: ELeadStatus;
  
  switch (classification) {
    case 'Interested':
    case 'MeetingRequest':
      newStatus = ELeadStatus.Interested;
      break;
    case 'NotInterested':
      newStatus = ELeadStatus.NotInterested;
      break;
    case 'PricingRequest':
      newStatus = ELeadStatus.Interested; // Pricing requests show interest
      break;
    case 'Spam':
      // Keep current status for spam
      return;
    case 'Neutral':
    default:
      // Keep current status for neutral
      return;
  }

  await db.lead.update({
    where: { id: leadId },
    data: { status: newStatus },
  });
}

/**
 * Determine if auto-reply should be sent
 */
function shouldSendAutoReply(classification: string, reply: string): boolean {
  // Don't reply to spam or if no reply generated
  if (classification === 'Spam' || !reply.trim()) {
    return false;
  }
  
  // Don't auto-reply to "Not Interested" to avoid annoying leads
  if (classification === 'NotInterested') {
    return false;
  }
  
  return true;
}

/**
 * Send auto-reply and update message status
 */
async function sendAutoReply(
  leadId: string, 
  messageId: string, 
  leadName: string, 
  replyText: string,
  campaignName?: string,
  campaignId?: string
): Promise<void> {
  try {
    // Get lead details
    const lead = await db.lead.findUnique({
      where: { id: leadId },
      select: { email: true, name: true }
    });

    if (!lead?.email) {
      console.warn(`[AIProcessor] Lead ${leadId} has no email, skipping auto-reply`);
      return;
    }

    // Check for recent AI replies to prevent loops
    const recentAIReply = await db.outreachMessage.findFirst({
      where: {
        leadId,
        senderType: 'Admin',
        aiResponseStatus: 'Sent',
        aiResponseSentAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
        }
      },
      orderBy: { aiResponseSentAt: 'desc' }
    });

    if (recentAIReply) {
      console.log(`[AIProcessor] Skipping auto-reply for lead ${leadId} - recent AI reply detected`);
      return;
    }

    // Send the reply
    const subject = campaignName ? `Re: ${campaignName}` : 'Re: Your inquiry';
    const { messageId: newMessageId } = await sendEmail({
      to: lead.email,
      subject,
      tempName: 'outreach',
      tempData: { leadName: lead.name, body: replyText },
      idempotencyKey: `ai-reply-${messageId}-${Date.now()}`,
    });

    // Record AI reply
    await db.outreachMessage.create({
      data: {
        leadId,
        campaignId: campaignId || null,
        subject,
        body: replyText,
        type: 'Email',
        senderType: 'Admin',
        sentAt: new Date(),
        providerMessageId: newMessageId,
        aiResponseStatus: 'Sent' as any,
        aiResponseSentAt: new Date(),
      },
    });

    // Update original message status
    await db.outreachMessage.update({
      where: { id: messageId },
      data: { aiResponseStatus: 'Sent' },
    });

    console.log(`[AIProcessor] Auto-reply sent to lead ${leadId}`);
  } catch (error) {
    console.error(`[AIProcessor] Failed to send auto-reply for lead ${leadId}:`, error);
    // Mark as failed but don't throw to avoid breaking sync
    await db.outreachMessage.update({
      where: { id: messageId },
      data: { aiResponseStatus: 'Pending' },
    });
  }
}

/**
 * Get AI classification statistics
 */
export async function getAIClassificationStats(): Promise<any> {
  const stats = await db.outreachMessage.groupBy({
    by: ['aiClassification'],
    where: {
      aiClassification: { not: null }
    },
    _count: {
      id: true
    }
  });

  return stats.reduce((acc: Record<string, number>, stat: any) => {
    acc[stat.aiClassification || 'Unknown'] = stat._count.id;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Toggle auto-reply for a specific lead
 */
export const toggleAutoReplyForLead = async (leadId: string, enabled: boolean): Promise<void> => {
  // Store auto-reply preference in lead metadata or create a separate table
  // For now, we'll handle this at the application level
  await db.lead.update({
    where: { id: leadId },
    data: {
      // Note: Add autoReplyEnabled field to Lead model in Prisma schema for full implementation
    }
  });
};

/**
 * Send Calendly booking link for interested/meeting request leads
 */
export async function sendCalendlyBookingLink(leadId: string, leadEmail: string, leadName: string, classification: string): Promise<void> {
  const { createCalendlyEvent } = await import('../calendly/calendly.service');
  
  try {
    // Generate meeting title based on classification
    const title = classification === 'MeetingRequest' 
      ? "Schedule a Meeting with QC Exclusive"
      : "Schedule a Discussion with QC Exclusive";
    
    const description = classification === 'MeetingRequest'
      ? `${leadName} has requested a meeting. Please select a convenient time to discuss your needs.`
      : `${leadName} is interested in learning more. Please schedule a time to discuss our services.`;

    // Create Calendly event
    const result = await createCalendlyEvent({
      leadId,
      title,
      description,
      startTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000 + 60 * 60 * 1000), // Tomorrow + 1 hour
    });

    // Update lead with Calendly info
    await db.lead.update({
      where: { id: leadId },
      data: {
        calendlyEventId: result.eventId,
        calendlyUri: result.uri,
        calendlyStatus: "Scheduled" as any,
      },
    });

    console.log(`[AIProcessor] Calendly booking link sent to ${leadEmail}`);
  } catch (error) {
    console.error(`[AIProcessor] Failed to send Calendly booking link:`, error);
  }
}

