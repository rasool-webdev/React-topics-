import { useRef, useState } from "react"
import React from 'react'

const REg2 = () =>
{
    const nameref=useRef()
    const handle = () =>
    {
        console.log(nameref.current.value)
    }
  return (
      <div>
          <input type="text" ref={nameref} />
          
          <button onClick={handle}>Click</button>
    </div>
  )
}
//{nameref.current['value']}
export default REg2

