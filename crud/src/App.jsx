import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import Create from '../components/Create'
import Update from '../components/Update'
import './App.css'

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Create' element={<Create />} />
      <Route path='/Update' element={<Update />} />
    </Routes>
  )
}

export default App
