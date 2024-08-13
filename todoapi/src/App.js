import './App.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [todos,setTodos]=useState([])

  useEffect (()=>
  {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      setTodos(res.data)
    })
  }
  )
  return (
    <div className="App">
      {todos && todos.map((todo,index)=>
      (
        <div key={index}>
          <h2>{todo.title}</h2>
          <p>Status : {todo.completed}</p>
        </div>
        
      ))}
    </div>
  );
}

export default App;
