import axios from 'axios';
import React from 'react'

import toast from 'react-hot-toast';
import {useState, useContext,createContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

// Create Context
const AuthContext = createContext();


// Provider Component
export const AuthProvider=({children})=> {

    const [user,setUser] =useState(null)
    const navigate = useNavigate()
    const login = (userData) => setUser(userData);
    

 


    const logout= async()=>{
        try {
              await axios.post("http://localhost:3000/api/auth/logout",{},{withCredentials:true})
            
            setUser(null)

            toast.success("Logout Success")
            navigate("/signin")
        } catch (error) {
          
            
            console.error(error.response?.data?.message||"Logout failed:", error);
        }
    }

    // ✅ Fetch user profile when the app loads
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/auth/profile", {
            withCredentials: true,
          });
          setUser(res.data);  // ✅ Store user data globally
        } catch (err) {
          console.log("User not logged in or session expired");
        }
      };
  
      fetchProfile();
    }, []);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
    {children}
</AuthContext.Provider>
  )
}

// export const useAuth = () => useContext(AuthContext);
// ✅ Keep the hook exported like this (Outside, Not Inside Component)
export const useAuth = () => useContext(AuthContext);
