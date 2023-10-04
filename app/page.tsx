import { Card, Input } from '@nextui-org/react'
import Image from 'next/image'
import BuyButton from '../components/button/BuyButton'
import SellButton from '../components/button/SellButton'
import ActionButton from '@/components/button/ActionButton'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 p-10">
      <div className='flex flex-col text-center gap-6'>
        <h1 className='text-5xl font-semibold'>Welcome to MyTickets</h1>
        <p>Buy and Sell your ND tickets quickly and securely</p>
      </div>


      <div className='flex flex-col gap-4'>
        <ActionButton 
          route='buy'
          title='Buy'
          color='nd-green'
        />
        <ActionButton 
          route='sell'
          title='Sell'
          color='nd-yellow'
        />
      </div>


    </main>
  )
}
