import Link from 'next/link'
import React from 'react'

const BuyButton = () => {
  return (
    <div className='bg-nd-green px-16 py-4 rounded-xl'>
      <Link href={"/buy"}>
        Buy
      </Link>
    </div>
  )
}

export default BuyButton
