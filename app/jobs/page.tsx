
import getAllJobs from "@/actions/all-jobs";
import ClientJob from "./client-job";


export default async function Jobs() {


  

  const jobs = await getAllJobs();
    

  

  return (
    <div>
        <h1 className="text-[3rem] container py-4">Job Listings</h1>

                      <div className="">
                        <ClientJob jobs={jobs}/>
                      </div>
    </div>
  )
}
