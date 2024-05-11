import { createContext,useContext, useState } from "react";
export const authcontext= createContext();
export const Authprovider=({children})=>{
const [token,settoken]=useState(localStorage.getItem("token"));
const [username,setusername]=useState(localStorage.getItem("username"))
const[isdoctor,setdoctor]=useState(localStorage.getItem("isdoctor"))
const isverified=!!token;
const [doctors,setdoctorsdata]=useState([])
const[doctor_id,setid]=useState()
const auth=(token,username)=>{
    localStorage.setItem("token",token);
    localStorage.setItem("username",username)
    settoken(token)
    setusername(username)

}
const logout=()=>{
    localStorage.removeItem("token");
    settoken("")
}
return <authcontext.Provider value={{token,settoken,isverified,logout,auth,username,isdoctor,setdoctor,setdoctorsdata,doctors,doctor_id,setid}}>{children}</authcontext.Provider>
}


export const useAuth=()=>{
    return useContext(authcontext);
}