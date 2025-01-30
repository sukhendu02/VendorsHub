import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';



export default function Signin() {

    const [loading, setLoading] = useState(false);

 
   

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

      
       
          <form>
            <div className="mb-4">
              {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
              <input
                type="email"
                placeholder="Email"
                className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-sm font-medium text-gray-700">Password</label> */}
              <input
                type="password"
                placeholder="Password"
                className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
              />
            </div>
            <button
              type="submit"
              className="w-full my-4 p-3 bg-secondary text-white rounded-xl"
            >
              Sign In
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
