"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [inputData, setInputData] = useState('')
  const router = useRouter()

  const handleInputChange = (e)=>{
    setInputData(e.target.value)
  }

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
          onClick={() => router.push(`/${inputData}`)}>Procurar</button>
        </div>
      </div>
    )
}
