import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar'
import Login from './component/Login'
import Register from './component/Register'
import Footer from './component/Footer'
import Logout from './component/Logout'

import MedicalDashboard from './component/das'
// import MedicalWebsiteHomePage from './component/Home'
import MedicalWebsite from './component/Home'
// import MedicalVisits from './component/Patient'
// import Component from './component/nearby'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/' element={<MedicalWebsite/>}/>
      <Route path='/dash' element={<MedicalDashboard/>}/>
      {/* <Route path='/daspatient' element={<MedicalVisits/>}/> */}
    </Routes>
    

     <Footer/>
    </>
  )
}

export default App
