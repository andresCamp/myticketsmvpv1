import Image from 'next/image'
import React from 'react'
import ndlogo from '/public/ndclover.png'
import mtlogo from '/public/MyTickets.png'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex flex-row p-8 w-screen  justify-between'>
      <Link href={"/"} className='hover:brightness-110'>
        <Image 
            src={mtlogo}
            alt=''
            height={50}
        />
      </Link>

        <Image 
            src={ndlogo}
            alt=''
            height={50}
        />
    </div>
  )
}

export default Header
