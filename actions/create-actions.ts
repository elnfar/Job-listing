'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function createJobs(data:FormData) {


    const title = data.get('title') as string
    const companyName = data.get('companyName') as string
    const location = data.get('location') as string
    const salary = data.get('salary') as string
    const type = data.get('type') as string



    await prisma.jobListing.create({
      data: {
        title:title,
        companyName:companyName,
        location,
        salary,
        type
      }
    })
    revalidatePath('/jobs')
  }

