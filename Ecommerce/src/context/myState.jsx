import React from 'react'
import myContext from './myContext'
const MyState = () => {
    const state={
        name:"rasool",
        phon:"12345"
    }
  return (
  <myContext.Provider MyState={(state)}>

  </myContext.Provider >
  )
}

export default MyState
