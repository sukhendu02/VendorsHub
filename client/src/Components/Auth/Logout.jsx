import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import {useAuth} from "../../Context/AuthContext" 


export default function Logout() {
    const { logout } = useAuth();
    // const navigate = useNavigate
    // navigate("/signin")
 
  return (
    <>
    <button
      onClick={logout}
      className=""
    >
      Logout
    </button>
    </>
  )
}
