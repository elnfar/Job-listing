import { DropDown } from "@/components/dropdown";
import { InputWithLabel } from "./client";
import { prisma } from "@/lib/prisma";

import getAllJobs from "@/actions/all-jobs";
import Card from "@/components/ui/card";


export default async function Jobs() {


  

  const jobs = await getAllJobs();
    

  return (
    <div>
        <h1 className="text-[3rem] container py-4">Job Listings</h1>

        
                    <div className="container mx-auto flex flex-col gap-12">

                        <div className="grid grid-cols-3 gap-4">

                            <InputWithLabel
                            type="text"
                            label="Title"
                            id="Title"
                            placeholder="title..."
                            />

                            <InputWithLabel
                            type="text"
                            label="Location"
                            id="Location"
                            placeholder="Location..."
                            />


                            <InputWithLabel
                            type="text"
                            label="Salary"
                            id="Salary"
                            placeholder="minimum salary..."
                            />

                            <DropDown/>
                        </div>


                      <div>
                      {jobs.map((item) => (
                        <Card 
                        title={item.title}
                        type={item.type}
                        location={item.location}
                        salary={item.salary}
                        desc="The best job you can find out there on market!"
                        companyName={item.companyName}
                        />
                      ) )}
                      </div>

                </div>
    </div>
  )
}
