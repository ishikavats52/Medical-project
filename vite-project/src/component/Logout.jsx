import React, { useCallback,useEffect } from 'react'
import { useAuth } from '../ContextApi/Authcontext'
import { useNavigate } from 'react-router-dom';

function Logout() {
const{logout,setdoctor}= useAuth();
const navigate = useNavigate();
useEffect(() => {
  localStorage.removeItem("isdoctor")
  setdoctor("")
  logout();
  navigate('/Login'); 
}, [logout, navigate])
    
  return (
    <>

    </>
  )
}

export default Logout