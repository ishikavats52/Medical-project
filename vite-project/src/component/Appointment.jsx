
import React, { useEffect, useState } from 'react';
import { useAuth } from '../ContextApi/Authcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppointmentSection = () => {

const {token,setdoctorsdata}=useAuth()

  const[user,setuser]=useState({
    "disease":"",
    "address":"",
    "location":""
  })
  const [location,setlocation]=useState()

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const newLocation = [
                // position.coords.longitude,
                // position.coords.latitude
                -73.935242
,
40.73061
            ];

            setlocation({
              type: 'Point',
              coordinates: newLocation,
          },);
            setuser((prev) => ({
                ...prev,
                location: {
                    type: 'Point',
                    coordinates: newLocation,
                },
            }));
        });

    }
    else {
        toast.error("failed to fetch location");
    }
}, [])
const handlechange=(e)=>{
let name= e.target.name;
let value= e.target.value;
try {
  setuser((prev)=>({...prev,
    [name]:value
  }))
} catch (error) {
  console.log(error)
}
}
const handlesubmit=async (e)=>{
  console.log("hi")
  e.preventDefault();
  try {
    console.log(token)
    const updatedstate={
      ...user,
      location:location,
    }
    const response= await fetch("http://localhost:4000/Api/nearby",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
      body:JSON.stringify( updatedstate)
    })
    if (response.ok) {
      const data= await response.json()
      console.log(data.neardoc)
      // setdoctorsdata(data)
      
      setuser({
        "disease":"",
        "address":"",
        "location":""
      })
      if (data.neardoc.length==0) {
        toast.error("no doctor found in your area")
      }
      else{
        toast.success("Query Sent Successfully")
        setdoctorsdata(data.neardoc)
      }
    }
    else{
      toast.error("error try again later")
    }
  } catch (error) {
    toast.error("internal server error")
    console.log(error)
  }
}
  return (<>

    <div className="container-fluid py-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="mb-4">

              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Send query</h5>
              <h1 className="display-4">Send Query and Find all doctor near you</h1>

            </div>
            <p className="mb-5">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>

            <a className="btn btn-outline-primary rounded-pill py-3 px-5" href="">
              Read More
            </a>
          </div>

          <div className="col-lg-6">

            <div className="bg-light text-center rounded p-5">
              <h1 className="mb-4">Send Query</h1>
              <form onSubmit={handlesubmit}>
                <div className="row g-3">
                <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Diseases
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    name="disease"
                                    className="form-control"
                                    placeholder="Enter your username"
                                    required
                                    value={user.disease}
                                    onChange={handlechange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    placeholder="Enter your username"
                                    required
                                    value={user.address}
                                    onChange={handlechange}
                                />
                            </div>

                  {/* <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-white border-0"
                      placeholder="Your Name"
                      style={{ height: '55px' }}
                    />
                  </div> */}

                  {/* <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control bg-white border-0"
                      placeholder="Your Email"
                      style={{ height: '55px' }}
                    />
                  </div> */}

                  {/* <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-white border-0 datetimepicker-input"
                        placeholder="Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        style={{ height: '55px' }}
                      />
                    </div>
                  </div> */}
{/* 
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control bg-white border-0 datetimepicker-input"
                        placeholder="Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        style={{ height: '55px' }}
                      />
                    </div>
                  </div> */}

                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Find Doctor
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div> <ToastContainer /></>

  );
};

export default AppointmentSection;
