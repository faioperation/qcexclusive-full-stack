import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";
import { prisma } from "../../db_connection/prisma";
import config from "../../config";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const db = prisma as any;

/**
 * Syncs email replies from the IMAP server (Gmail).
 */
export const syncInboxReplies = async () => {
  console.log("[InboxSync] Starting email synchronization...");

  const client = new ImapFlow({
    host: "imap.gmail.com",
    port: 993,
    secure: true,
    auth: {
      user: config.SMTP_USER as string,
      pass: config.SMTP_PASS as string,
    },
    logger: false,
  });

  try {
    await client.connect();

    // Lock the INBOX while we process
    let lock = await client.getMailboxLock("INBOX");

    try {
      // 1. Search for all "Unseen" messages
      const sequence = await client.search({ seen: false });
      
      if (sequence && sequence.length > 0) {
        // 2. Fetch the sources for those messages
        const messages = await client.fetch(sequence, { source: true });

        for await (let message of messages) {
          if (!message.source) continue;
          
          const parsed = await simpleParser(message.source);
          const fromValue = parsed.from;
          const senderEmail = Array.isArray(fromValue) 
            ? fromValue[0]?.value[0]?.address 
            : fromValue?.value[0]?.address;

          const subject = parsed.subject || "(No Subject)";
          const body = parsed.text || parsed.html || "";
          const emailDate = parsed.date || new Date();

          if (!senderEmail) continue;

          console.log(`[InboxSync] Processing message from: ${senderEmail}`);

          // 1. Find the lead associated with this email
          const lead = await db.lead.findFirst({
            where: { email: { equals: senderEmail, mode: "insensitive" } },
            orderBy: { createdAt: "desc" },
          });

          if (lead) {
            console.log(`[InboxSync] Lead found: ${lead.name} (ID: ${lead.id})`);

            // 2. Create an OutreachMessage record for the reply
            await db.outreachMessage.create({
              data: {
                leadId: lead.id,
                campaignId: lead.campaignId,
                subject: subject,
                body: body as string,
                type: "Email",
                senderType: "Lead", // Mark as message from Lead
                sentAt: emailDate,
                gmailThreadId: lead.gmailThreadId || lead.id,
              },
            });

            // 3. Automated Meeting Detection
            // Simple regex to look for dates like "1 June 2026" or "10:30 AM"
            // In a real app, this would use AI (e.g. GPT) for extraction
            const dateMatch = body.match(/(\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4})/i);
            const timeMatch = body.match(/(\d{1,2}:\d{2}\s*(AM|PM))/i);

            if (dateMatch && timeMatch) {
              const dateStr = dateMatch[1];
              const timeStr = timeMatch[1];
              const startDateTime = new Date(`${dateStr} ${timeStr}`);
              const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Default 1 hour duration

              await db.meeting.create({
                data: {
                  title: `Meeting with ${lead.name}`,
                  leadId: lead.id,
                  campaignId: lead.campaignId,
                  startTime: startDateTime,
                  endTime: endDateTime,
                  status: "Scheduled",
                  meetingLink: "https://meet.google.com/qcx-clusive", // Default link
                },
              });
              console.log(`[InboxSync] Automated meeting created for ${lead.name} at ${startDateTime}`);
            }

            // 4. Update status to Interested (indicating engagement)
            await db.lead.update({
              where: { id: lead.id },
              data: { status: "Interested" },
            });

            console.log(`[InboxSync] Successfully saved reply for ${lead.name}`);
          } else {
            console.warn(`[InboxSync] No matching lead found for email: ${senderEmail}`);
          }
        }
      } else {
        console.log("[InboxSync] No new unseen messages found.");
      }
    } finally {
      // Release the lock
      lock.release();
    }

    await client.logout();
    console.log("[InboxSync] Synchronization complete.");
  } catch (error: any) {
    console.error("[InboxSync] Fatal Error:", error.message);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Email sync failed: " + error.message);
  }
};
