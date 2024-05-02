import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../ContextApi/Authcontext';
function Login() {
const navigate=useNavigate()
const{auth}=useAuth()
  const[token,settoken]=useState()
  const [user,setuser]=useState({
    "email":"",
    "password":""
  })
  const handlesubmit= async(e)=>{
    e.preventDefault();
try {
  const data= await fetch("http://localhost:4000/Api/Login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  })
  const response= await data.json()
  if(data.ok){
    console.log(response)
    console.log(response.token,response.userexist.username)
    auth(response.token,response.userexist.username);
    toast.success("Success Notification !");
    setTimeout(()=>{
navigate('/')
    },1000)
  }
} catch (error) {
  toast.error("error !");
  console.log(error)
}
  }
  const handlechange=(e)=>{
let name= e.target.name;
let value=e.target.value;
setuser((prev)=>({
...prev,
[name]:value
}))
  }
  return (
   <> <div className="sec1"><div className="wrapper">
   <div className="title">Login Form</div>
   <form action="#" onSubmit={handlesubmit}>
     <div className="field">
       <input type="text" required name='email' value={user.email} onChange={handlechange} />
       <label>Email Address</label>
     </div>
     <div className="field">
       <input type="password" required name='password' value={user.password} onChange={handlechange}/>
       <label>Password</label>
     </div>
     <div className="content">
       <div className="checkbox">
         <input type="checkbox" id="remember-me" />
         <label htmlFor="remember-me">Remember me</label>
       </div>
       <div className="pass-link">
         <a href="#">Forgot password?</a>
       </div>
     </div>
     <div className="field">
       <input type="submit" value="Login" />
     </div>
     <div className="signup-link">
       Not a member? <a href="#">Signup now</a>
     </div>
   </form>
 </div></div>
 <ToastContainer /></>
  )
}

export default Login