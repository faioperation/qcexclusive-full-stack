import { prisma } from "../../db_connection/prisma";
import { getAIClassificationStats as getStats } from "../../services/ai/aiReplyProcessor.service";

const db = prisma as any;

export const getAIClassificationStats = getStats;

export const toggleAutoReplyForLead = async (leadId: string, enabled: boolean) => {
  // Store auto-reply preference - for now using a simple approach
  // In a full implementation, you might add a dedicated field to the Lead model
  await db.lead.update({
    where: { id: leadId },
    data: {
      // Note: Add autoReplyEnabled field to Lead model in Prisma schema for full implementation
    }
  });
};

export const generateAIReplyForMessage = async (messageId: string) => {
  const message = await db.outreachMessage.findUnique({
    where: { id: messageId },
    include: {
      lead: { select: { name: true, email: true } },
      campaign: { select: { name: true } }
    }
  });

  if (!message || message.senderType !== 'Lead') {
    throw new Error('Message not found or not a lead reply');
  }

  // This would call the AI service to generate a reply
  // For now, return a placeholder
  return {
    messageId,
    reply: `Thank you for your reply, ${message.lead.name}. We'll get back to you soon.`
  };
};
