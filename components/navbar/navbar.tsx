import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <nav>
        <div className='flex justify-between items-center p-4 container'>
            <h1>Joblash</h1>

            <ul className='flex gap-4 text-[1.2rem]'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/listings'>Listings</Link></li>
                <li><Link href='/create-job'>Create a job</Link></li>
            </ul>

        </div>

    </nav>
  )
}