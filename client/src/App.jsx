import { useState,useEffect } from 'react'
import axios from 'axios';

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar';
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
// import Logout from './Components/Auth/Logout';
import Profile from './Components/Auth/Profile';
import DashboardStats from './Components/Dashboard';
import GettingStart from './Components/GettingStart';
// import Settings from './Components/Settings';
import Support from './Components/Support';
import Policies from './Components/Policies';
import SOP from './Components/SOP';
import Orders from './Components/Orders';
import Landing from './Components/Landing';
import ProtectedRoute from './Components/ProtectedRoute';
import Guest from './Components/Guest';

import { Toaster } from 'react-hot-toast'; 
import Marketing from './Components/Marketing';
import Documentation from './Components/Documentation';
import { useAuth } from './Context/AuthContext';
import ErrorPage from './Components/ErrorPage';
import ResetPass from './Components/Auth/ResetPass';
import ForgotPass from './Components/Auth/ForgotPass';
import VerifyEmailPage from './Components/Auth/VerifyEmailPage';
// import TicketsPage from './Components/TicketsPage';
import TicketsPage from './Components/TicketsPage';

function App() {
  const [count, setCount] = useState(0)


  const { authLoading } = useAuth(); // ✅ Check auth state before rendering

  if (authLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }
  return (
    <>
    
    
      <Toaster position="top-center" reverseOrder={false} />
      {/* <div className="flex h-screen bg-gray-100">
        <Sidebar/>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar/>
          <main className="flex-1 overflow-x-hidden overflow-y-auto m-3 p-2">
            <Routes>
              <Route path="/" element={<DashboardStats/>} />
              <Route path="/orders" element={<div className="p-6">Orders Page</div>} />
              <Route path="/users" element={<div className="p-6">Users Page</div>} />
              <Route path="/settings" element={<div className="p-6">Settings Page</div>} />
              <Route path="/marketing" element={<Sign/>} />
            </Routes>
          </main>
        </div>
      </div> */}
       <div className="flex h-screen">
        <Routes>
        {/* <Route path="*" element={<ErrorPage />} /> */}
          
        <Route element={<Guest />}>

        <Route path="/vendor/auth/signup" element={<Signup />} />
        <Route path="/vendor/auth/signin" element={<Signin />} />
        <Route path="/vendor/auth/forgot-password" element={<ForgotPass />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/api/auth/reset-password/:token" element={<ResetPass />} />
        </Route>
       
        {/* <Route path="/logout" element={<Logout />} /> */}
        
          <Route
            path="/documentation"
            element={
              <div className="flex w-full flex-col h-screen">
                <Topbar />
                <main className="flex-1 w-full h-screen overflow-x-hidden overflow-y-auto p-2 mb-20 md:mb-20">
                  {/* <div className="p-6">Documentation Page</div> */}
                  <Documentation/>
                </main>
              </div>
            }
          />
          <Route
            path="/"
            element={

                <Landing />
              
            }
          />
          <Route
            path="/vendor/*"
            element={
              <div className="flex w-full h-screen bg-gray-100 ">
                {/* <Sidebar /> */}
                {/* <div className="flex-1 flex flex-col overflow-hidden"> */}
                  {/* <Topbar /> */}
                  {/* <main className="flex-1 overflow-x-hidden overflow-y-auto m-1 p-2 mb-20 "> */}
                    <Routes>
                      {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
                      <Route path="/dashboard" element={<DashboardStats />} />
                      {/* <Route path="/orders" element={<div className="p-6">Orders Page</div>} /> */}
                      {/* <Route path="/users" element={<div className="p-6">Users Page</div>} /> */}
                      <Route path="/profile" element={<Profile/>} />
                      <Route path="/marketing" element={<Marketing />} />
                      <Route path="/start" element={<GettingStart />} />
                      <Route path="/policies" element={<Policies />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/support/tickets" element={<TicketsPage />} />
                      <Route path="/SOPs" element={<SOP />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/profile" element={<Profile />} />
                      
                      <Route path='*' element={<ErrorPage/>}/>
                      </Route>

                    </Routes>
                  {/* </main> */}
                {/* </div> */}
              </div>
            }
          />
          <Route path='*' element={<ErrorPage/>}/>
          
        </Routes>
      </div>
      
  
  
    </>
  )
}

export default App
