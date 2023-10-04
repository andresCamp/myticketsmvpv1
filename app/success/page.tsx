import ActionButton from '@/components/button/ActionButton'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col items-center gap-16 p-10">
      <div className='flex flex-col text-center gap-6'>
        <h1 className='text-5xl font-semibold'>Order Recieved!</h1>
        <p>We have successfully received your order.</p>
        <p>Check your inbox regurally for offers!</p>
      </div>


      <ActionButton 
          route=''
          title='Begin new transaction'
          color='nd-green'
        />




    </main>
  )
}

export default page
