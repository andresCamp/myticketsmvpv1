import SellForm from '@/components/forms/SellForm'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <div className='flex flex-col text-center gap-6'>
        <h1 className='text-5xl font-semibold'>Sell MyTickets!</h1>
        <p>Complete the form below and we will send offers to your inbox!</p>
      </div>

        <SellForm/>



    </main>
  )
}

export default page
