'use client'
import { Input, Select, SelectItem } from '@nextui-org/react'
import React, {Key, useState} from 'react'

const gameList = [
    "Ohio State",
    "Southern Cal",
    "Pittsburgh",
    "Wake Forest"
]

const BuyForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [ndid, setNdid] = useState('')
    const [game, setGame] = useState<Set<string>>(new Set())

  return (
    <div>
      <form className='flex flex-col gap-8'>
        <Input 
            label="Name"
            placeholder="Enter your name"
            variant="bordered"
            value={name}
            onValueChange={setName}
        />
        <Input 
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
            value={email}
            onValueChange={setEmail}
        />
        <Input 
            label="NDID"
            placeholder="Enter your NDID"
            variant="bordered"
            value={ndid}
            onValueChange={setNdid}
        />
        
        <Select
        label="Game"
        variant="bordered"
        placeholder="Choose game"
        selectedKeys={game}
        className="max-w-xs"
        onSelectionChange={setGame}
      >
        {gameList.map((game) => (
          <SelectItem key={game} value={game}>
            {game}
          </SelectItem>
        ))}
      </Select>
        
      </form>
    </div>
  )
}

export default BuyForm
