'use client'


import React,{ChangeEvent, useEffect, useState} from 'react'
import createJobs from "@/actions/create-actions"
import { InputWithLabel } from '../jobs/inputJob'
import { Button } from '@/components/ui/button'
import { DropDown } from '@/components/dropdown'

const initialState = {
    title:'',
    companyName:'',
    location:'',
    salary:'',
    type:''
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
    

export default function CreateJobClient() {

    const [value, setValue] = useState('')
    const [state,setState] = useState({...initialState, type:''})


    useEffect(() => {
        setState((prevState) => ({ ...prevState, type: value }));
      }, [value]); // Listen for changes in the 'value'
    

    function onChange(event:ChangeEvent<HTMLInputElement>) {
          setState({ ...state, [event.target.name]: event.target.value });
      }
       
  return (
    <div>
            <form action={createJobs} className='container grid grid-cols-4 gap-12'>


            <InputWithLabel
            type='text'
            id='title'
            placeholder='title'
            label='title'
            value={state.title}
            onChange={onChange}
            name='title'
            />


            <InputWithLabel 
            type='text'
            value={state.companyName}
            id='companyName'
            placeholder='companyName'
            label='companyName'
            name='companyName'
            onChange={onChange}

            />

            <InputWithLabel 
            type='text'

            id='location'
            placeholder='location'
            label='location'
            value={state.location}
            onChange={onChange}
            name='location'

            />
            <InputWithLabel 
            type='text'
            value={state.salary}
            id='salary'
            placeholder='salary'
            label='salary'
            onChange={onChange}
            name='salary'

            />

        <input type="hidden" value={value} name='type' onChange={onChange}/>
        <DropDown value={value} setValue={setValue} jobType={jobType}/>

            <Button type='submit' variant='outline'>Create</Button>
            </form>
    </div>
  )
}
