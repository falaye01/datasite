import React, { useState, createContext } from 'react'
import "./CompA.css"
import CompB from '../CompB/CompB'


export const userContext = createContext()
function CompA() {
    const [user, setUser] = useState("comrade")
  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
       <userContext.Provider value={user}>
       <CompB user={user}/>
       </userContext.Provider>
      
    </div>
  )
}

export default CompA
