import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import NoPage from './pages/NoPage'
import Cart from './pages/Cart'
import Allproducts from './pages/Allproducts'
import Dashboard from './pages/Admin/dashboard'
import Navabar from './components/Navabar'
import myContext from './context/myContext'
const App = () => {
  const details = {
    name:{ name1:"prasad",name2:"raj"},
    Phno: 2525252,
  }
  return (
    <myContext.Provider value={details}>
    <BrowserRouter>
      <Routes>        
        <Route path='' element={<Home />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Navabar' element={<Navabar />} />
        <Route path='/AllProducts' element={<Allproducts />} />
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </myContext.Provider>
  )
}

export default App
