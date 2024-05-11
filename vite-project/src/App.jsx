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
import DoctorRegistrationForm from './component/Doctorlogin'

import AppointmentSection from './component/Appointment'
import BookAppointment from './component/nearby'
import { useAuth } from './ContextApi/Authcontext'
import AppointmentManager from './component/Approvepage'
import Dashboard from './component/Patientdash'
import AppointmentForm from './component/Appointmentform'

// import MedicalVisits from './component/Patient'
// import Component from './component/nearby'


function App() {
  const{isdoctor}=useAuth()
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/' element={<MedicalWebsite/>}/>

     { isdoctor?<Route path='/dash' element={<MedicalDashboard/>}> <Route path="/dash/Appointment" element={<AppointmentManager/>}/>
      </Route>:<Route  path='/patientdash' element={<Dashboard/>}/>}
      {/* <Route path='/daspatient' element={<MedicalVisits/>}/> */}
      <Route path='/DocReg' element={<DoctorRegistrationForm/>}/>
       
      <Route  path='/bookappointment' element={<BookAppointment/>}/>
  <Route path='/Appointmentform' element={< AppointmentForm/>}/>

    </Routes>
    

     <Footer/>
    </>
  )
}

export default App
