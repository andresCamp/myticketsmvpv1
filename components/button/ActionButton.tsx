import Link from 'next/link'
import React from 'react'

interface ActionButtonTypes {
    route: string,
    color: string,
    title: string
}

const ActionButton: React.FC<ActionButtonTypes> = ({route, color, title}) => {
  return (
      <Link href={`/${route}`}>
        <div className={`bg-${color} px-16 py-4 text-xl font-bold text-center text-white rounded-xl shadow-lg hover:brightness-105 hover:scale-105`}>
          {title}
        </div>
      </Link>
  )
}

export default ActionButton
