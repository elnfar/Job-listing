import { DropDown } from "@/components/dropdown";
import { InputWithLabel } from "./client";


export default function Jobs() {


  

  return (
    <div>
        <h1 className="text-[3rem] container py-4">Job Listings</h1>

        
                    <div className="container mx-auto">
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

        </div>

    </div>
  )
}
