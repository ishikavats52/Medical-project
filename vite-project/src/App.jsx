import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar'
import Login from './component/Login'
import Register from './component/Register'
import Footer from './component/Footer'
import Logout from './component/Logout'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
