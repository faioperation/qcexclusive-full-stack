-- CreateEnum
CREATE TYPE "EMediaPostStatus" AS ENUM ('Posted', 'Draft');

-- CreateTable
CREATE TABLE "docs_links" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "docsLink" TEXT NOT NULL,
    "prompt" TEXT,
    "postGenerate" INTEGER NOT NULL DEFAULT 1,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "docs_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_posts" (
    "id" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "postTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "EMediaPostStatus" NOT NULL DEFAULT 'Draft',
    "docsLinkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "docs_links" ADD CONSTRAINT "docs_links_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_posts" ADD CONSTRAINT "media_posts_docsLinkId_fkey" FOREIGN KEY ("docsLinkId") REFERENCES "docs_links"("id") ON DELETE CASCADE ON UPDATE CASCADE;
