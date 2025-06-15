import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ResetPass() {
  const [loading,setLoading]=useState(false)

   const navigate = useNavigate();
    const { token } = useParams();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


   const validatePassword = () => {
    if(!newPassword || !confirmPassword){
      toast.error('Please fill in all fields');
      return false;
    }
    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters');
      return false;
    }
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    }
    return true;
  };


  const handleSubmit=async (e)=>{
    e.preventDefault();
    setLoading(true)

 if (!validatePassword()) return;
 try {

  
  const res = await axios.post(
        `http://localhost:3000/api/auth/reset-password/${token}`,
        { newPassword }
      );
      toast.success(res.data.message || 'Password reset successful');
      setTimeout(() => {
        navigate('/vendor/auth/signin');
      }, 2000);
  
 } catch (error) {
  toast.error(error.response?.data?.message || 'Reset failed');
  console.log(error)
  
 }finally{
  setLoading(false)
  setNewPassword("")
  setConfirmPassword("")



 }

  }
  return (
    <>
    <div className="w-full  flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
            
              <h2 className="text-2xl font-bold text-slate-700 text-center m-3">Enter Your New Password</h2>
    
              <div className="text-gray-500 bg-blue-50 p-2  rounded-xl text-xs  m-2">
                <strong>
                  Password must:
                  </strong> 
                  <ul>
                    <li>

- Be at least 8 characters long
                    </li>
                    <li>

- Contain at least one uppercase letter
                    </li>
                    <li>

- Contain at least one lowercase letter
                    </li>
                    <li>

- Include at least one number
                    </li>
                    <li>

- Include at least one special character (!@#$%^&*)
                    </li>
                    <li>

- Cannot be common (Ex. Passw0rd, Password123)
                    </li>
                  </ul>

              </div>
    
              <form 
              onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
                    value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cpassword"
                    className="w-full m-1 px-4 py-3 border-2 shadow-sm border-slate-300  rounded-lg focus:outline-none focus:ring focus:ring-primary focus:border-white text-slate-700"
                    value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
                    "Reset Password"
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
