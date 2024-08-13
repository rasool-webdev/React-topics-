import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Values  (prop) 
{
    const [inpVal,setInpuVal]=useState('')
    const d="Rasool";
    const parentValue =() =>
    {
      console.log(inpVal)
      prop.fun(inpVal)
    }
  return (
    <div className='child'>
      <p>I'm child</p>
      {prop.message}
      <input type='text' onChange={(e) =>
      {
        console.log(e.target.value)
        setInpuVal(e.target.value)
      }
      }></input>
      <button onClick={parentValue}>Click</button>
    </div>
  )
}

Values.propTypes={
    message:PropTypes.number,
    greeting:PropTypes.string,
    fun:PropTypes.func
}

export default Values
