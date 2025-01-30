import React from 'react'
import { Bell, Search, User,EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Topbar() {
  return (
    <>
      <div className="bg-white h-16  w-full px-4 flex items-center justify-between ">
      <div className="flex items-center flex-1">
        <div className="relative md:w-96 ">
         <h4 className='font-bold text-lg p-3 text-xl'>Vendors Hub</h4>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Link className='text-sm text-slate-600 font-semibold sm:block hidden'>Blogs</Link>
        <Link className='text-sm text-slate-600 font-semibold sm:block hidden' to="/documentation" target='_blank'>Docs</Link>
        <Link className='text-sm text-slate-600 font-semibold sm:block hidden'>Plans</Link>
        <Menu as="div" className="relative inline-block text-left sm:hidden">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2">
          <EllipsisVertical/>
          {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" /> */}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
          <Link className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>Blogs</Link>
        
          </MenuItem>
          <MenuItem>
        <Link className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>Docs</Link>
           
        
          </MenuItem>
          <MenuItem>
        <Link className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>Plans</Link>
      
       
          </MenuItem>
         
        </div>
      </MenuItems>
    </Menu>
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
