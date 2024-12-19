import React from 'react'
import { useContext } from 'react'
import "./CompD.css"
import { userContext } from '../CompA/CompA'

function CompD() {
    const user = useContext(userContext)
  return (
    <div className='box'>
    <h1>ComponentA</h1>
    <h2>{`bro ${user}`}</h2>
  
    </div>
  )
}

export default CompD
