"use client"
import React, { useState } from 'react'
import { getUser } from './user/services/getUser'
import User from "./user"

export default function Home() {
  const [inputData, setInputData] = useState('')
  let data = {}
  let hasUser = false

  const handleInputChange = (e)=>{
    setInputData(e.target.value)
  }

  const handleButtonClick = async () =>{
    const user = await getUser(inputData)
    console.log(user)
    if(user){
      hasUser = true
      data = user
      setInputData('')
    }else{
      hasUser = false
    }
  }
  
  if(hasUser){
    return <User data={data}/>
  }else{
    return (
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-bold">PROCURE USUÁRIOS GITHUB</h1>
        <div className="flex flex-col justify-center items-center gap-1">
        <label className="text-2xl font-medium">Digite o nome do usuário:</label>
        <input type="text"
          onChange={handleInputChange}
          placeholder='jonathasltavares'
          value={inputData}
          className="block text-black font-bold mb-1 md:mb-0 pr-4 rounded-sm"/>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleButtonClick}>Procurar</button>
        </div>
      </div>
    )
  }
}