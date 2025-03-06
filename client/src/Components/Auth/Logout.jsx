import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import {useAuth} from "../../Context/AuthContext" 
import {LogOut} from "lucide-react"


export default function Logout() {
    const { logout } = useAuth();
    // const navigate = useNavigate
    // navigate("/signin")
 
  return (
    <>
    <button
      onClick={logout}
      className="w-full justify-center bg-complimentory cursor-pointer text-slate-50 flex p-2 rounded-lg align-baseline" 
    >
 <LogOut size={16} /> <span className='pl-2 align-middle'>Sign Out</span>
    </button>
    </>
  )
}