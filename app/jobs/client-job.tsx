'use client'

import Card from '@/components/ui/card';
import React, { ChangeEvent, useState } from 'react'
import { InputWithLabel } from './inputJob';
import { JobListing } from '@prisma/client';
import { DropDown } from '@/components/dropdown';

type ClientJob = {
  jobs:JobListing[]
}


const initialState = {
  title:'',
  location:'',
  salary:'',
}



const jobType = [
  {
    value:'Full-Time',
    label:'Full-Time'
  },
  {
    value:'Part-Time',
    label:'Part-Time'
  },
]


export default function ClientJob({jobs}:ClientJob) {

  
  const [state, setState] = useState(initialState)

  const [value, setValue] = useState('')


  //learn filter function

  function onChange(event:ChangeEvent<HTMLInputElement>) {
		setState({ ...state, [event.target.name]: event.target.value });
        console.log(event.target.value)
	}
  // const filteredJob = jobs.filter((item) =>   Number(item.salary) >= Number(state.salary)) 
  
  

  const filteredJob = jobs.filter((item) => {
    const salaryCondition = Number(item.salary) >= Number(state.salary);
    const titleCondition = state.title === '' || item.title.includes(state.title);
    const locationCondition = state.location === '' || item.location.includes(state.location);

    const typeCondition = value === "" || item.type === value;
    
    return salaryCondition && titleCondition && locationCondition && typeCondition
  });

  

  

  return (
    <div>
                <div className='grid grid-cols-3 py-12 gap-2 container'>

                          <InputWithLabel
                            type="text"
                            label="Title"
                            id="Title"
                            placeholder="title..."
                            name='title'
                            onChange={onChange}
                            />

                            <InputWithLabel
                            type="text"
                            label="Location"
                            id="Location"
                            placeholder="Location..."
                            name='location'
                            onChange={onChange}
                            />


                            <InputWithLabel
                            type="text"
                            label="Salary"
                            id="Salary"
                            placeholder="minimum salary..."
                            onChange={onChange}
                            value={state.salary}
                            name='salary'
                            />


                        <div className="grid grid-cols-3 gap-4 ">
                            <DropDown value={value} setValue={setValue} jobType={jobType}/>
                        </div>

          </div>

          <div className="grid grid-cols-2  gap-y-6 container">
                      {filteredJob.map((item:any) => (
                        <Card
                        title={item.title}
                        type={item.type}
                        location={item.location}
                        salary={item.salary}
                        desc="The best job you can find out there on market!"
                        companyName={item.companyName}
                        key={item.id}
                        />
                      ) )}
                      </div>
    </div>
  )
}
