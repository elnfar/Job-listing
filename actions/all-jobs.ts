import { prisma } from "@/lib/prisma";


export default async function getAllJobs() {

        const jobs =  await prisma.jobListing.findMany({

        })

        return jobs
}