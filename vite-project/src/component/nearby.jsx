import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'; // If using React Router for navigation
import AppointmentSection from './Appointment';
import { useAuth } from '../ContextApi/Authcontext';

const BookAppointment = () => {
  const navigate= useNavigate()
   const{doctors,token,setid}=useAuth()
  useEffect(()=>{

  },[])
  const handleclick=(e)=>{
const id = e.target.getAttribute("data-id");
console.log(id)

setid(id)
setTimeout(()=>{
navigate("/Appointmentform")
},100)
  }
 
console.log(doctors)
  return (
    <div>
      <AppointmentSection/>
      
      {/* Main Content - Doctor List */}
      <div className="container mt-4">
        <h2>Choose a Doctor</h2>
        <div className="row">
          {/* Loop through the doctor data */}
          {doctors.map((doctor, index) => (
            <div className="col-md-4" key={doctor._id}>
            
              <div className="doctor-card">
                <h3>{doctor.username}</h3>
                <p>Contact: {doctor.phone}</p>
                {/* <p>Location: {doctor.location}</p> */}
                <p>Email: {doctor.email}</p>
                <p>Country: {doctor.country}</p>
                <button data-id={`${doctor._id}`}   
                onClick={handleclick}
                className="book-button">Book Appointment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
