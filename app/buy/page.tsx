import BuyForm from '@/components/forms/BuyForm'
import BuyForm2 from '@/components/forms/BuyForm2'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <div className='flex flex-col text-center gap-6'>
        <h1 className='text-5xl font-semibold'>Buy MyTickets!</h1>
        <p>Looking to purchase a ticket? Complete the details below and have offers sent to you inbox!</p>
      </div>

        <BuyForm2/>



    </main>
  )
}

export default page
