import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../ContextApi/Authcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentForm = () => {
const{doctor_id,token}=useAuth()
    const[user,setuser]=useState({
        "date":"",
        "query":"",
        "time":"",
        "status":"Pending"

    })
    const handlechange=(e)=>{
let name= e.target.name;
let value= e.target.value;
setuser((prev)=>({
    ...prev,
    [name]:value,
    status:"Pending",
    
}))
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {

          const response = await fetch(`http://localhost:4000/Api/Appointment/${doctor_id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(user),
          });
      
          if (response.ok) {
            toast.success("Appointment booked successfully");
          } else {
            const errorText = await response.text(); // Get the error message
            console.error("Error:", errorText);
            toast.error(`Failed to book appointment: ${errorText}`);
          }
        } catch (error) {
          console.error("An unexpected error occurred:", error);
          toast.error("An unexpected error occurred. Please try again later.");
        }
      };
      
        
  return (<> 
    <div className="container my-5">
      <h2 className="mb-4 h2">Book an Appointment</h2>
      <form className="bg-light p-4 rounded shadow-sm border" onSubmit={handlesubmit}>
        {/* <div className="row mb-3">
         
        </div> */}

        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <label className="form-label" htmlFor="date">Date</label>
            <input
              className="form-control"
              id="date"
              type="date"
              name='date'
              value={user.date}
              onChange={handlechange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="time">Time</label>
            <select className="form-select" id="time" name='time' onChange={handlechange} value={user.time}>
              <option>Select a time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="reason">Reason for Appointment</label>
          <textarea
            className="form-control"
            id="reason"
            placeholder="Enter the reason for your appointment"
            rows="4"
            name='query'
            value={user.query}
            onChange={handlechange}
          ></textarea>
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" type="reset">
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
    <ToastContainer /></>
  );
};

export default AppointmentForm;
