import React from 'react'
import Value from './value'
import { myContext } from './context'

const Input = () => {
  return (
    <div
      style={{border:'2px solid red',
      height:'300px',
      width:'300px',
    }}>
    <p>input.js</p>
    <Value />
    </div>
  )
}

export default Input
