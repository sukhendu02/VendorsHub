import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';

import CircularProgress from '@mui/material/CircularProgress';


export default function ForgotPass() {

    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState("")
   

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true)
        
        try {
             const response = await axios.post(
        'http://localhost:3000/api/auth/forgot-password',
        { email },{withCredentials:true}
      );

      toast(response.data.message || 'Check your email for reset link',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
      //  toast.success(response.data.message || 'Check your email for reset link');
        } catch (error) {
          // toast.error(error.message || 'Error occurred');
             const msg =
        error.response?.data?.message ||
        error.message ||
        'Failed to send reset link';
      toast.error(msg);
      
        }
        finally{
            setLoading(false)
            setEmail("")
         
        }
        

    }

  return (
<>

<div className="w-full  flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-14 bg-white shadow-md rounded-lg">
        <p>
          {/* {message} */}
        </p>
          <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

          <p className="text-gray-500 text-center mb-4">
            Enter your email to get password reset mail!
          </p>

          <form 
          onSubmit={handleSubmit}
          >
            <div className="mb-4">
              {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
                // onChange={e => setEmail(e.target.value)}
                value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
         
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer w-full my-4 p-3  text-white rounded-xl ${
                loading ? "bg-[#F1B97D]" : "bg-secondary"
              }`}
            >
              {loading ? (
                <CircularProgress
                  className="text-white"
                  size={16}
                  style={{ color: "white" }}
                />
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-slate-600">
              Want to Sign In?
              <Link
                to="/vendor/auth/signin"
                className="text-primary  font-bold cursor-pointer"
              >
                Sign In
              </Link>
            </p>

            <p className="text-sm my-4 text-slate-500">
              Don't have account?{" "}
              <Link to="/vendor/auth/signup" className="text-secondary font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
        
    </>
  )
}
