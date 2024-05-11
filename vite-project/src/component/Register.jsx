import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../ContextApi/Authcontext';
function Register() {
  const navigate=useNavigate()
  const{isverified}=useAuth()
  const[user,setuser]=useState({
    "username":"",
    "phone":"" ,
    "email":"",
    "password":"",
    "country":"India"
  })
  const handlesubmit= async(e)=>{
e.preventDefault();
console.log("hi")
try {
  const data= await fetch("http://localhost:4000/Api/user",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  })
  const response= await data.json()
  console.log(response)
 
  if (data.ok) {
    console.log("fetched")
    setuser({
      "username":"",
      "phone":"" ,
      "email":"",
      "password":"",
      "country":"India"
    })
    toast.success("Success !");
setTimeout(()=>{
navigate("/Login")
},1000)
  }
  else{
    toast.error("User already exist  ")  
  }
  
} catch (error) {
  toast.error("internal server error ")
  console.log(error)
}
  }
  const handlechange=(e)=>{
let name=e.target.name;
let value=e.target.value;
console.log(name,value)
setuser((prev) => ({
  ...prev,
  [name]: value,
}));
  }
  return (
   <>
    <div className="sec1"><div className="wrapper">
    <h5 style={{textAlign:"center"}}>Doctor register:<Link to={"/DocReg"}>Click here</Link></h5>
      <div className="title" style={{textAlign:"center"}}>Register Form</div>
      <form  onSubmit={handlesubmit}>
        <div className="field">
          <input type="text" required value={user.username} name='username' onChange={handlechange}/>
          <label>Full Name</label>
        </div>
        <div className="field">
          <input type="number" required value={user.phone} name='phone' onChange={handlechange}/>
          <label>Phone</label>
        </div>
        <div className="field">
          <input type="text" required value={user.email} name='email' onChange={handlechange}/>
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" required  value={user.password} name='password' onChange={handlechange}/>
          <label>Password</label>
        </div>
        <div className="field">
          <input type="text" required defaultValue={"India"} name='country' />
          <label>Country</label>
        </div>
        <div className="field">
          <input type="submit" value="Register" />
        </div>
        <div className="signup-link">
          Already a member? <a href="#">Login here</a>
        </div>
      </form>
      
    </div>
    </div>
    <ToastContainer />
   </>
  )
}

export default Register