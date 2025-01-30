import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


import CircularProgress from '@mui/material/CircularProgress';

export default function Signup() {
   
    const [loading, setLoading] = useState(false);

 
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const validateSignup =()=>{
        const { username, email, password, confirmPassword } = formData;
        console.log(formData)
        if (!username || !email || !password || !confirmPassword) {
          toast.error('Please fill in all fields'); 
          return false;
        }
        if (password !== confirmPassword) {
          toast.error("Passwords doesn't matched");
          return false;
          }
          if (password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return false;
            }
            if (!/^[A-Z]/.test(password)) {
              toast.error("Password must contain at least one uppercase letter");
              return false;
              }
              // if (!/^[a-z]/.test(password)) {
              //   toast.error("Password must contain at least one lowercase letter");
              //   return false;
              //   }
                // if (!/^[0-9]/.test(password)) {
                //   toast.error("Password must contain at least one digit");
                //   return false;
                //   }
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    toast.error('Invalid email address');
                    return false;
                  }
                  return true;
      }

      const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);

        
        if(!validateSignup()){
          setLoading(false)
          return;
        }
              
         
        
        try {
              


        
          
          const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
          
          alert(response.data.message);
           // Clear form data
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
          window.location.href = '/signin';
        } catch (error) {
          console.error(error.response?.data || error.message);
        }
        finally{
          setLoading(false)
        }
      };

  return (
    <>
     <div className="w-full  flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-14 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign Up
        </h2>

        <p className='text-gray-500 text-center mb-4'>

        Create a new account and Start Selling
        </p>

     
          <form onSubmit={handleSignup} method='post'>
            <div className="mb-4">
              {/* <label className="block text-sm font-medium text-gray-700">Name</label> */}
              <input
                type="text"
                placeholder="Username or Bussiness Name"
                name='username'
                // value={formData.username}
                className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
              <input
                type="email"
                placeholder="Email"
                name='email'
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
                className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-sm font-medium text-gray-700">Password</label> */}
              <input
                type="password"
                placeholder="Cofirm Password"
                name='confirmPassword'
                className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className= {`cursor-pointer w-full my-4 p-3  text-white rounded-xl ${loading? "bg-[#F1B97D]":"bg-secondary" }`}
            >

          {loading ?  (<CircularProgress className='text-white' size={16} style={{color:"white"}}/>) : "Sign Up"}
              {/* Sign Up */}
            </button>
          </form>
       

          <div className="text-center mt-4">
          <p className="text-sm text-slate-600">
            Already have an account?
            <Link 
            to="/signin"
              
              className="text-primary  font-bold cursor-pointer"
            >
              Sign In
            </Link>
          </p>
          
          {/* <p className='text-sm my-4 text-slate-500'>Can't Remember Password? <a href="" className='text-secondary font-semibold'>Forgot Password</a></p> */}
        </div>



      </div>
    </div>
    </>
  )
}
