import React from 'react'

import { Link , useNavigate ,useLocation} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from '../../Context/AuthContext';



export default function Signin() {

    const [loading, setLoading] = useState(false);
    const { login } = useAuth(); // ✅ Get login function from context
  const [showResend,setShowResend]=useState(false)
  const [resendEmail,setResendEmail]=useState('')

const [alert, setAlert] = useState(null); // { type: "success" | "error", message: string }

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
 const [searchParams] = useSearchParams();

 

 
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

        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signin`,fromData,{withCredentials:true})
        // console.log('Login Successful:', token);
        login(response.data.user); // ✅ Update global user state
        toast.success(response.data.message || "Login Success")

        // redirect to dashboard
      navigate("/vendor/dashboard")


      } catch (error) {
        // console.error('Login Failed:', error);
        // console.error(error.response?.data||error.message)
         if (error.response?.status === 403) {
      toast.error("Email not verified. Please check your inbox.");
       setResendEmail(fromData.email);
      setShowResend(true); // state for resend button
    }else{
      
   
      toast.error(error.response?.data?.message ||'Failed to Login! Please try again later.')
    }
        
      }
      finally{
        setfromData({
          email:'',
          password:'',
        })
        setLoading(false)
      }


    }

      const handleResend = async (e) => {
    try {
      e.preventDefault();
      // console.log(resendEmail)
      const resp=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/resend-verification`, { email:resendEmail });
      // console.log(resp)
      toast.success("Verification email sent again ✅");
    } catch (err) {
      // console.log(err);
      toast.error(err.response?.data?.message || "Failed to resend verification email.");
    }
  }

  return (
    <>
     <div className="w-full  flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full h-full md:h-auto max-w-lg p-14 bg-white shadow-md rounded-lg">
     
     <Link to="/">
        <img src="/Logo/aabhaar.png" alt="logo" width="180px" className='m-auto p-4' />
        </Link>

    {showResend && (
          <div className="my-3 p-3  w-full text-center rounded flex items-center justify-between text-sm bg-amber-50 text-amber-500">
            <p className="text-yellow-500 mb-2">Resend Verification Email</p>
            <button
              onClick={handleResend}
              className="px-2 py-2 rounded-md text-white cursor-pointer shadow-2xl bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600 font-semibold"
            >
              Resend 
            </button>
          </div>
         )} 


        
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
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
            to="/vendor/auth/signup"
             
              className="text-primary  font-bold cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
          
          <p className='text-sm my-4 text-slate-500'>Can't Remember Password? <Link to="/vendor/auth/forgot-password" className='text-secondary font-semibold'>Forgot Password</Link></p>
        </div>
      </div>
    </div>
    </>
  )
}
