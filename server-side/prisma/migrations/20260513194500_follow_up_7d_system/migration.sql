-- AlterTable Campaign
ALTER TABLE "Campaign" ADD COLUMN IF NOT EXISTS "followUpMessage" TEXT;

-- AlterTable Lead
ALTER TABLE "Lead" ADD COLUMN IF NOT EXISTS "pendingFollowUpJobId" TEXT;
ALTER TABLE "Lead" ADD COLUMN IF NOT EXISTS "followUpSentAt" TIMESTAMP(3);

-- AlterTable OutreachMessage
ALTER TABLE "OutreachMessage" ADD COLUMN IF NOT EXISTS "followUpSentAt" TIMESTAMP(3);
ALTER TABLE "OutreachMessage" ADD COLUMN IF NOT EXISTS "followUpSourceMessageId" TEXT;

-- Unique: at most one follow-up row per initial outreach message id
CREATE UNIQUE INDEX IF NOT EXISTS "OutreachMessage_followUpSourceMessageId_key" ON "OutreachMessage"("followUpSourceMessageId");
