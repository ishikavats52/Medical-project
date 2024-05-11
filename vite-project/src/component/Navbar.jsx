import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../ContextApi/Authcontext'

function Navbar() {
  const{isverified,username}= useAuth()
  let{isdoctor}=useAuth()
  return (
   <>
   <nav><div className="main-nav d-flex justify-content-evenly align-items-center">
    <div className="logo"> <Link to={"/"} className="navbar-brand" href="#"><img src="https://t3.ftcdn.net/jpg/03/24/58/44/360_F_324584485_qtdluDzmBNkJvmntEPlNeG1htwPktgCa.jpg" alt=""  /></Link></div>
    <div class="nav-links">
        <Link to={"/"}>Home</Link>
        <a href="">About</a>
        <a href="">Appointment</a>
        <Link to={"/bookappointment"}>Near BY Doctor</Link>
       { isdoctor?<Link to={"/dash"}>Dashboard</Link>:<Link to={"/patientdash"}>Dashboard</Link>}
        
    </div>
    {isverified?<div className="userbtn">
    <h6>{`User:${username}`}</h6>
   <Link to={"/Logout"} > 
   
   <div className="login">Logout</div></Link>

</div>:<div className="userbtn">
   
   <Link to={"/Login"} ><div className="login">login</div></Link>
   <Link to={"/Register"} ><div className="register">Register</div></Link>
</div>}
    
   </div></nav>
   </>
  )
}

export default Navbar