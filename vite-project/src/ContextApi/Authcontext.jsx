import { createContext,useContext, useState } from "react";
export const authcontext= createContext();
export const Authprovider=({children})=>{
const [token,settoken]=useState(localStorage.getItem("token"));
const isverified=!!token;
const auth=(token)=>{
    localStorage.setItem("token",token);

}
const logout=()=>{
    localStorage.removeItem("token");
    settoken("")
}
return <authcontext.Provider value={{token,settoken,isverified,logout,auth}}>{children}</authcontext.Provider>
}


export const useAuth=()=>{
    return useContext(authcontext);
}