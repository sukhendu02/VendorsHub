import React from 'react'
import { Bell, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <>
      <div className="bg-white h-16  px-4 flex items-center justify-between ">
      <div className="flex items-center flex-1">
        {/* <div className="relative md:w-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div> */}
      </div>

      <div className="flex items-center gap-5">
        <Link className='text-sm text-slate-600 font-semibold'>Blogs</Link>
        <Link className='text-sm text-slate-600 font-semibold'>Docs</Link>
        <Link className='text-sm text-slate-600 font-semibold'>Plans</Link>
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
        </button>
        
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
