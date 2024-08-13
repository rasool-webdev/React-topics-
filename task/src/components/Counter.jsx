import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const incr = ()=>
    {
        setCount(count +1)
    }
    const decr =()=>
    {
        if (count >0)
        {
            setCount(count-1)
        }
    }
    const reset =()=>
    {
        setCount(0)
    }
  return (
    <div>
        
      <div className='mainbox '>
      <p className='name'>React Counter</p>
      <p className='value'>{count}</p>
      <button className='decr ' onClick={decr}>-</button>
      <button className='incr' onClick={incr}>+</button>
      <button className='reset' onClick={reset}>Reset</button>
      </div>
     
    </div>
  )
}

export default Counter

