import React, { useCallback,useEffect } from 'react'
import { useAuth } from '../ContextApi/Authcontext'
import { useNavigate } from 'react-router-dom';

function Logout() {
const{logout}= useAuth();
const navigate = useNavigate();
useEffect(() => {
  logout();
  navigate('/Login'); 
}, [logout, navigate])
    
  return (
    <>

    </>
  )
}

export default Logout