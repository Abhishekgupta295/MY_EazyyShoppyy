import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  

  return (
    <>
      <div className="bg-blue-200">
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </div>
      {
        //this is checking for git pusing
      }
    </>
  )
}

export default App
