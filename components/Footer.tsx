import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900 text-center p-2 text-stone-300 text-sm font-thin'>
      © {new Date().getFullYear()} MyTickets. All Rights Reserved.
    </div>
  )
}

export default Footer
