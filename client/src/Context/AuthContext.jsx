import axios from 'axios';
import React from 'react'

import toast from 'react-hot-toast';
import {useState, useContext,createContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

// Create Context
const AuthContext = createContext();


// Provider Component
export const AuthProvider=({children})=> {
  const [authLoading, setauthLoading] = useState(true);

    const [user,setUser] =useState(null)
    const navigate = useNavigate()
    // const login = (userData) => setUser(userData);
    
      // 🔹 Login Function
  const login = async (userData) => {
    setUser(userData);
  };

 


    const logout= async()=>{
        try {
              await axios.post("http://localhost:3000/api/auth/logout",{},{withCredentials:true})
            
            setUser(null)

            toast.success("Logout Success")
            navigate("/vendor/auth/signin")
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
          
        // navigate("/"); // ✅ Redirect to dashboard if logged in
        } catch (err) {
          // navigate("/signin"); // ✅ Redirect to login if NOT logged in
          console.log("User not logged in or session expired");
        }
        setauthLoading(false)
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
