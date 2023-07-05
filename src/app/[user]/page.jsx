"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function User({ params }){
  const [user, setUser] = useState({})
  const [hasUser, setHasUser] = useState(false)

  useEffect(()=>{
    const fetchData = async()=>{
    try {
      const { data: response } = await axios.get(`https://api.github.com/users/${params.user}`)
      setUser(response)
      setHasUser(true)
    } catch (error) {
      
    }
    }
    fetchData();
  }, [])

    if(!hasUser){
      return <span className='h-screen flex justify-center items-center font-mono text-md font-thin'>carregando...</span>
    }else{
      return(
        <div className=" h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-3">
            <img
              src={user.avatar_url}
              className={`
                rounded-full h-22
              `}
    
            />
            <a className="font-mono text-2xl font-extrabold" href={user.html_url}>{user.name}</a>
          </div>
          <div className="max-w-md text-center font-mono text-md font-thin flex flex-col gap-4">
            {user.bio}
            <div className="flex justify-evenly">
              <span>followers: {user.followers}</span>
              <span>following: {user.following}</span>
            </div>
          </div>
        </div>
        )
    }
    
}
