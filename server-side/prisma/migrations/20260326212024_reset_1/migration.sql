/*
  Warnings:

  - You are about to drop the column `aiSpecification` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `scheduledAt` on the `Meeting` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gmailThreadId]` on the table `Lead` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endTime` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EMessageSender" AS ENUM ('Admin', 'Lead');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ELeadStatus" ADD VALUE 'Running';
ALTER TYPE "ELeadStatus" ADD VALUE 'Completed';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "EPlatform" ADD VALUE 'Twitter';
ALTER TYPE "EPlatform" ADD VALUE 'TikTok';
ALTER TYPE "EPlatform" ADD VALUE 'YouTube';
ALTER TYPE "EPlatform" ADD VALUE 'GoogleMaps';

-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "aiSpecification",
ADD COLUMN     "industry" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "specification" TEXT,
ALTER COLUMN "followerThreshold" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "gmailThreadId" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "role" TEXT,
ADD COLUMN     "totalScore" DOUBLE PRECISION,
ADD COLUMN     "website" TEXT;

-- AlterTable
ALTER TABLE "Meeting" DROP COLUMN "scheduledAt",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "OutreachMessage" ADD COLUMN     "gmailThreadId" TEXT,
ADD COLUMN     "senderType" "EMessageSender" NOT NULL DEFAULT 'Admin';

-- CreateIndex
CREATE UNIQUE INDEX "Lead_gmailThreadId_key" ON "Lead"("gmailThreadId");
