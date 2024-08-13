
//import React from 'react'
import './App.css'
import Values from './Values'
import  { useState } from 'react';

const App = () =>
{
  const val=123;
  const [myVal,setmyVal]=useState('')
  const x=function ale(data)
  {
    alert('hello world ' + data)
    setmyVal(data)
  return "Rasool"
  }
  return (
    <div className='parent'>
      <Values message={val} greeting="hi" fun={x} />
      {myVal && <p>Im' from child {myVal}</p> }
      {x}
    </div>
  )
}

export default App
