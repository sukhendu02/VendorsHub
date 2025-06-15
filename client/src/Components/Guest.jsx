import React from 'react'
    import { Navigate, Outlet } from "react-router-dom";
    import { useAuth } from '../Context/AuthContext';

export default function Guest() {
  
    
    
      const { user,loading } = useAuth();

      if (loading) return <div className="h-screen flex items-center bg-black justify-center">Checking authentication...</div>; // ✅ Prevent flickering

    
      return user ? <Navigate to="/vendor/dashboard" replace /> : <Outlet />;

    
      
      
    }
    
