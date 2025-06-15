import React from 'react'
import { Link } from 'react-router-dom'
import { CircleAlert } from 'lucide-react'
export default function ErrorPage() {
  return (
    <>
      
    <div className="flex flex-col items-center w-full justify-center m-6 h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <div className='flex items-center'>

      <h1 className="text-9xl p-4 font-bold text-gray-800 dark:text-white">404</h1>
      <div>

      
      <p className="text-xl p-4 text-gray-600 dark:text-gray-400 mt-2">
      Page Not Found! <br />
        Oops! The page you're looking for doesn't exist.
      </p>
      </div>
      </div>
      <Link
        to="/"
        className="mt-4 px-6 py-2 text-white bg-primary hover:bg-secondary rounded-md transition"
      >
        Go Home
      </Link>
    </div>
  
    
  
    </>
  )
}
