'use client'
import { Input, Select, SelectItem, Tooltip } from '@nextui-org/react'
import { isBefore } from 'date-fns';
import { useRouter } from 'next/navigation';
import React, {Key, useState} from 'react'

import axios from 'axios';


const gameList = [
  { name: "USC", date: new Date(2023, 9, 14, 17, 30) }, // October 14th, 2023 17:30
  { name: "Pittsburgh", date: new Date(2023, 9, 28, 13, 30) }, // October 28th, 2023 13:30
  { name: "Wake Forest", date: new Date(2023, 10, 18, 14, 30) } // November 18th, 2023 14:30
];

const BuyForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [ndid, setNdid] = useState('')
  const [game, setGame] = useState(new Set())
  const [emailError, setEmailError] = useState('')  // New state for email error
  
  const router = useRouter()





  // const {
  //   GOOGLE_PRIVATE_KEY,
  //   GOOGLE_CLIENT_EMAIL,
  //   GOOGLE_SUPPLY_SHEET_ID,
  //   GOOGLE_DEMAND_SHEET_ID
  // } = process.env;

  // const serciviceAccountAuth = new JWT({
  //   email: GOOGLE_CLIENT_EMAIL,
  //   key: GOOGLE_PRIVATE_KEY,
  //   scopes: ['https://www.googleapis.com/auth/spreadsheets']
  // });

  // const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serciviceAccountAuth);

  // const appendSpreadsheet = async (data) => {
  //   try {
  //     await doc.useServiceAccountAuth({
  //       client_email: GOOGLE_CLIENT_EMAIL,
  //       private_key: GOOGLE_PRIVATE_KEY,
  //     });
  //     await doc.loadInfo();
  //     console.log(doc.loadInfo());
  //     const sheet = doc.sheetsById[GOOGLE_DEMAND_SHEET_ID];
  //     await sheet.addRow(data);
  //     return result;
  //   }
  //   catch (e) {
  //     console.error('Error: ', e);
  //   }
  // }
    // const appendSpreadsheet = async (data) => {
    //   try {
    //     await doc.loadInfo();
    //     const sheet = doc.sheetsById[process.env.GOOGLE_SUPPLY_SHEET_ID];
    //     await sheet.addRow(data);
    //   } catch (e) {
    //     console.error('Error: ', e);
    //   }
    // };

  
  const validateEmail = (email) => {
      const regex = /^[a-zA-Z0-9._-]+@nd\.edu$/;
      return regex.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!validateEmail(email)) {
        setEmailError("Please use an 'nd.edu' domain email.");
        return;
    }
    console.log({
      name: name,
      email: email,
      ndid: ndid,
      game: Array.from(game).join(', ')  // If multiple selections are possible
    });


    // appendSpreadsheet({ name, email, ndid, game: Array.from(game).join(', ') });

    axios.post(`https://sheet.best/api/sheets/c475e5a6-c1c8-4d93-8cc8-4f9781952bd4`,
    {name, email, ndid, game: Array.from(game).join(', ')}
  )


 
    router.push("/success")

    }

    const activeGames = gameList.filter(game => isBefore(new Date(), game.date));

  return (
    <div>
      <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
        <Input 
            label="Name"
            isRequired
            placeholder="Enter your name"
            variant="bordered"
            value={name}
            onValueChange={setName}
        />
        <Input 
            label="Email"
            isRequired
            type='email'
            placeholder="Enter your nd.edu email"
            variant="bordered"
            value={email}
            onValueChange={setEmail}
        />
        {emailError && <span className="text-red-500">{emailError}</span>}  {/* Display error if it exists */}
        <Input 
            label="NDID"
            type='number'
            isRequired
            placeholder="Enter your NDID"
            variant="bordered"
            value={ndid}
            onValueChange={setNdid}
        />
        
        <Select
          label="Game"
          isRequired
          variant="bordered"
          placeholder="Choose game"
          selectedKeys={game}
          className="max-w-xs"
          onSelectionChange={setGame}
        >
          {activeGames.map((game) => (
            <SelectItem key={game.name} value={game.name}>
              {game.name}
            </SelectItem>
          ))}
        </Select>


        <button className='bg-nd-green px-16 py-4 text-xl font-bold text-center text-white rounded-xl shadow-lg hover:brightness-105 hover:scale-105' type='submit'>
          submit
        </button>
        
      </form>
    </div>
  )
}

export default BuyForm
