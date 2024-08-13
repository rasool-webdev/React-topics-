import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {INCR,DECR,RESET} from './reducers/counterSlice'
import {error} from './reducers/counterSlice'
import style from 'react'
import React from 'react';

function App() {
  const dispatch=useDispatch()
  const count = useSelector(state => state.counter.value)
  const error=useSelector(state => state.counter.error)

  return (
    <div className='App'>
      <p>Count:{count}</p>
            {error &&<p id='error' > {error}</p>}
      
			<button onClick={() => dispatch(INCR())}>Increase</button>
			<button onClick={() => dispatch(DECR())}>Decrease</button>
      <button onClick={() =>dispatch(RESET())}>Reset</button>
		</div>
	)
}


export default App;
