import React from 'react'

import { Link , useNavigate ,useLocation} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

import CircularProgress from '@mui/material/CircularProgress';



export default function Signin() {

    const [loading, setLoading] = useState(false);

    const [fromData, setfromData]=useState({
      email:'',
      password:'',
    })


    const navigate = useNavigate();
  const location = useLocation();


  // {{ ---  NOTIFICATION 2 TIMES FIX   ----}}
   // Check for success message in location state
   useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
      // Clear the state to avoid showing the toast again on page refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);


 
    const handleChange = (e) => {
      const {name,value}=e.target;

      setfromData({ ...fromData, [e.target.name]: e.target.value });
      // console.log(fromData.email,fromData.password)
    };

    const validateSignin=()=>{
      const {email,password}=fromData;

      if(!email || !password){
        toast.error("Email and Password are required.")
        return false
      }
      return true
    }

    const handleSignin = async (e)=>{
      e.preventDefault();
      setLoading(true);

      if(!validateSignin()){
        setLoading(false)
        return 
      }
      try {

        const response = await axios.post('http://localhost:3000/api/auth/signin',fromData,{withCredentials:true})
        // console.log('Login Successful:', token);
        toast.success(response.data.message || "Login Success")
        // redirect to dashboard
      navigate("/users")


      } catch (error) {
        // console.error(error.response?.data||error.message)
        
        // Add toast for backend error
        toast.error(error.response?.data?.message ||'Failed to Login! Please try again later.')
      }
      finally{
        setfromData({
          email:'',
          password:'',
        })
        setLoading(false)
      }


    }

  return (
    <>
     <div className="w-full  flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-14 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign In
        </h2>

        <p className='text-gray-500 text-center mb-4'>
        Sign in to your existing account!
        
        </p>

      
       
          <form onSubmit={handleSignin}>
            <div className="mb-4">
              {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
              <input
                type="email"
                placeholder="Email"
                name='email'
                value={fromData.email}
                className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-sm font-medium text-gray-700">Password</label> */}
              <input
                type="password"
                placeholder="Password"
                name='password'
                value={fromData.password}
                className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer w-full my-4 p-3  text-white rounded-xl ${loading? "bg-[#F1B97D]":"bg-secondary" }`}
            >
                {loading ?  (<CircularProgress className='text-white' size={16} style={{color:"white"}}/>) : "Sign In"}
            </button>
          </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-slate-600">
            Don't have an account?
            <Link
            to="/signup"
             
              className="text-primary  font-bold cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
          
          <p className='text-sm my-4 text-slate-500'>Can't Remember Password? <a href="" className='text-secondary font-semibold'>Forgot Password</a></p>
        </div>
      </div>
    </div>
    </>
  )
}
