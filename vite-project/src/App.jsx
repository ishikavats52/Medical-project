import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar'
import Login from './component/Login'
import Register from './component/Register'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
     
    </>
  )
}

export default App
