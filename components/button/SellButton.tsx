import Link from 'next/link'
import React from 'react'

const SellButton = () => {
  return (
    <div className='bg-nd-yellow px-16 py-4 rounded-xl'>
      <Link href={"/sell"}>
        Sell
      </Link>
    </div>
  )
}

export default SellButton
