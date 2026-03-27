/*
  Warnings:

  - You are about to drop the column `facebookDatasetId` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `instagramDatasetId` on the `Campaign` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "facebookDatasetId",
DROP COLUMN "instagramDatasetId",
ADD COLUMN     "apifyDatasetId" TEXT;
