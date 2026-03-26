-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "apifyDatasetId" TEXT,
ADD COLUMN     "firstMessage" TEXT,
ALTER COLUMN "platform" SET DEFAULT 'Instagram';
