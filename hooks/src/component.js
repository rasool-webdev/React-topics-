import React from 'react'
import { useIncr } from './App'

const component = () => {
    
    const [inc]=useIncr('https://www.fakestoreapi.com')

  return (
    <div>
       {inc}
    </div>
  )
}

export default component
