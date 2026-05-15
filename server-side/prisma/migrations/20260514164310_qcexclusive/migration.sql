/*
  Warnings:

  - A unique constraint covering the columns `[calendlyEventId]` on the table `Lead` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "EAIReplyClassification" AS ENUM ('Interested', 'NotInterested', 'Neutral', 'MeetingRequest', 'PricingRequest', 'Spam');

-- CreateEnum
CREATE TYPE "EAIResponseStatus" AS ENUM ('Pending', 'Sent', 'Skipped');

-- CreateEnum
CREATE TYPE "ECalendlyStatus" AS ENUM ('Pending', 'Scheduled', 'Confirmed', 'Cancelled');

-- CreateEnum
CREATE TYPE "ECalendlyEventType" AS ENUM ('Meeting', 'Call', 'Webinar');

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "calendlyEventId" TEXT,
ADD COLUMN     "calendlyStatus" "ECalendlyStatus" DEFAULT 'Pending',
ADD COLUMN     "calendlyUri" TEXT;

-- AlterTable
ALTER TABLE "OutreachMessage" ADD COLUMN     "aiClassification" "EAIReplyClassification",
ADD COLUMN     "aiConfidence" DOUBLE PRECISION,
ADD COLUMN     "aiGeneratedReply" TEXT,
ADD COLUMN     "aiResponseSentAt" TIMESTAMP(3),
ADD COLUMN     "aiResponseStatus" "EAIResponseStatus",
ADD COLUMN     "isAIGenerated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "media_posts" ADD COLUMN     "imageAlt" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "thumbnailUrl" TEXT;

-- CreateTable
CREATE TABLE "CalendlyEvent" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "eventType" "ECalendlyEventType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "ECalendlyStatus" NOT NULL DEFAULT 'Pending',
    "calendlyUri" TEXT,
    "meetingLink" TEXT,
    "location" TEXT,
    "attendees" INTEGER NOT NULL DEFAULT 1,
    "isRescheduled" BOOLEAN NOT NULL DEFAULT false,
    "rescheduledFrom" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalendlyEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CalendlyEvent_eventId_key" ON "CalendlyEvent"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Lead_calendlyEventId_key" ON "Lead"("calendlyEventId");

-- CreateIndex
CREATE INDEX "media_posts_status_idx" ON "media_posts"("status");

-- CreateIndex
CREATE INDEX "media_posts_docsLinkId_idx" ON "media_posts"("docsLinkId");

-- AddForeignKey
ALTER TABLE "CalendlyEvent" ADD CONSTRAINT "CalendlyEvent_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
