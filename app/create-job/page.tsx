'use client'

import React,{ChangeEvent, useState} from 'react'
import { InputWithLabel } from '../jobs/client'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import createJobs from '@/actions/create-actions'


const initialState = {

title:'',
companyName:'',
location:'',
salary:'',
type:'',
experienceLevel:'',
shortDescription:'',
description:'',
applyUrl:''

}

export default function page() {

  const [state,setState] = useState(initialState)


  function onChange(event:ChangeEvent<HTMLInputElement>) {
		setState({ ...state, [event.target.name]: event.target.value });
        console.log(event.target.value)
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

               <InputWithLabel 
            type='text'
            id='type'
            placeholder='type'
            label='type'
            onChange={onChange}

            value={state.type}
            name='type'
            />
        <Button type='submit' variant='outline'>Create</Button>
        </form>
    </div>
  )
}
