import { useState } from 'react'
import './App.css'
interface Todo
{
  text:string,
  id:number,
  completed:boolean
}

const App: React.FC=()=> {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo,setNewTodo]=useState([])

  return (
    <>
     <div>
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
        
     </div>
    </>
  )
}

export default App
