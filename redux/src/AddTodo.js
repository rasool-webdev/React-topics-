import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Add} from './action'
 
const AddTodo = () => {
    const  [value,setValue]=useState("")
    const dispacth=useDispatch()
    
  return (
    <div>
      <input type="text" onChange={(e)=>setValue(e.target.value)} />
      <button onChange={()=>dispacth(Add(value))}>Add</button>
    </div>
  )
}

export default AddTodo


