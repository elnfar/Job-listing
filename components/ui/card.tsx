import { Button } from "./button";


type Card = {
    title:string,
    companyName:string,
    location:string,
    salary:string,
    type:string,
    desc:string
}

export default function Card({title,companyName,location,salary,type,desc}:Card) {


    

  return (
    <div className="w-[500px] min-h-[240px] shadow-lg shadow-slate-700 flex flex-col p-4 border-4">
        
        <div>
            <h1 className="text-[2rem]">{title}</h1>
            <div className="flex items-center gap-4 text-neutral-500">
                <span>{companyName}</span>
                <span>{location}</span>
            </div>
        </div>

        <div className=" my-5 flex items-center gap-5">
            <span className=" rounded-2xl bg-neutral-500 p-2">$ {salary}</span>
            <span className=" rounded-2xl bg-neutral-500 p-2 px-4">{type}</span>
        </div>

        <p className=" text-lg">{desc}</p>



        <div className="pt-6 ml-auto mr-2">
        <Button className="">View More</Button>
        </div>

    </div>
  )
}

