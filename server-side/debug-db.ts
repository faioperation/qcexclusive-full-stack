import { prisma } from "./src/app/db_connection/prisma";

async function checkStatus() {
  const jobs = await (prisma as any).scrapingJob.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: { campaign: true }
  });
  console.log("Recent Scraping Jobs:", JSON.stringify(jobs, null, 2));

  const leads = await (prisma as any).lead.count();
  console.log("Total Leads in DB:", leads);
}

checkStatus()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
