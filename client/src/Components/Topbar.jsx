import React from 'react'
import { Bell, Search, User,EllipsisVertical,LogOut} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Logout from './Auth/Logout';
// import { useAuth } from '../Context/AuthContext';
import {useAuth} from '../Context/AuthContext'
export default function Topbar() {
  const { user } = useAuth();
  console.log(user)
  return (
    <>
      <div className="bg-white h-16  w-full px-4 flex items-center justify-between ">
      <div className="flex items-center flex-1">
        <div className="relative md:w-96 ">
         {/* <h4 className='font-bold text-lg p-3 text-xl'>Vendors Hub</h4> */}
         <img src="/Logo/VendorHub (500 x 200 px).png" className="" width="150px" alt="img" />
        </div>
      </div>

      <div className="flex items-center gap-2 ">
        <Link className='text-sm text-slate-600 font-semibold sm:block hidden'>Blogs <span className='text-xs bg-slate-200 p-1 px-2 text-slate-500 rounded-xl'>Coming Soon</span></Link>
        <Link className='text-sm text-slate-600 font-semibold sm:block hidden' to="/documentation" target='_blank'>Docs</Link>
        <Link className='text-sm text-slate-600 font-semibold sm:block hidden'>Plans <span className='badge text-xs'>Free</span> </Link>
        <Menu as="div" className="relative inline-block text-left sm:hidden text-slate-600">
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
          <Link className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>Blogs <span className='text-xs bg-slate-200 p-1 px-2 text-slate-500 rounded-xl'>Coming Soon</span></Link>
        
          </MenuItem>
          <MenuItem>
        <Link to="/documentation" className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>Docs</Link>
           
        
          </MenuItem>
          <MenuItem>
        <Link className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>Plans <span className='badge text-xs'>Free</span></Link>
      
       
          </MenuItem>
         
        </div>
      </MenuItems>
    </Menu>
        {/* <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
        </button> */}
        
        <div className="flex items-center gap-2 text-slate-600">

        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold focus:outline-none data-[focus]:outline-1 cursor-pointer ">
      
          <svg xmlns="http://www.w3.org/2000/svg" width="28" className='text-complimentory' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl  bg-slate-100 text-slate-700 text-sm transition duration-200 ease-in-out [--anchor-gap:var(--spacing-10)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            // className="bg-slate-400"
          >
            <div className="text-nowrap">
              <a className="block rounded-lg py-2  hover:bg-slate-50 p-2 px-6 pr-12  transition " href="#">
                {/* <p className="font-medium text-sm p-1  text-slate-700">Hi {user.username}</p> */}
                {/* <p className="text-slate-700/50">Measure actions your users take</p> */}
              </a>
              <Link to="/vendor/profile" className="block rounded-lg py-2  hover:bg-slate-50 p-2  px-6 pr-12 transition " href="#">
                <p className="font-medium text-sm p-1  text-slate-700">Profile</p>
                {/* <p className="text-slate-700/50">Create your own targeted content</p> */}
              </Link>
              <div to="/logout" className="block rounded-lg py-2  hover:bg-slate-50 p-2 px-6 pr-12  transition " href="#">
                <p className="font-medium text-sm p-1  text-slate-700 flex">  <span className='pl-2 align-middle'><Logout/></span></p>
                {/* <p className="text-slate-700/50">Keep track of your growth</p> */}
              </div>
            </div>
          
          </PopoverPanel>
        </Popover>

          {/* <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}
