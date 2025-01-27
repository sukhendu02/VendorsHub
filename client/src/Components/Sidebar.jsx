import React, { useState } from 'react'


import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Settings,
  ChevronLeft,
  ShieldPlus,
  MessageCircleQuestion,
  Menu
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: ShoppingCart, label: 'Orders', path: '/orders' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];
const menuItems2 = [
  { icon: LayoutDashboard, label: 'Polices', 
    path: '/Policies',
  submenu: [
    { label: 'All Products', path: '/products' },
    { label: 'Categories', path: '/products/categories' },
    { label: 'Inventory', path: '/products/inventory' },
  ],
  },
  { icon: ShieldPlus, label: 'SOPs', path: '/SOPs' },
  { icon: MessageCircleQuestion, label: 'Support', path: '/Support' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];
export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    
  return (
    <>
        <div className={`h-screen bg-white  transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} relative`}>
      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-10 bg-primary cursor-pointer p-1 rounded-full text-white md:block hidden"
      >
        {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
      </button>

      <div className="p-4">
        <h1 className={`text-2xl font-bold mb-8 ${collapsed ? 'hidden' : 'block'}`}>
          VendorHub
        </h1>
      </div>

      <nav className="m-2 mt-4 ">
        {menuItems.map((item) => (
            
          <NavLink
            key={item.label}
            to={item.path}
            className="flex items-center px-4 py-3 text-slate-800 hover:bg-gray-800  hover:text-white transition-colors rounded-xl"
          >
            <item.icon className='text-primary' size={20} />
            <span className={`ml-4 ${collapsed ? 'hidden' : 'block'} text-sm font-medium`}>
              {item.label}
            </span>
          </NavLink>
        ))}
        <small className='p-2 text-sm text-gray-500'>General</small>

        {menuItems2.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className="flex items-center px-4 py-3 text-slate-800 hover:bg-gray-800  hover:text-white transition-colors rounded-xl"
          >
            <item.icon className='text-primary' size={20} />
            <span className={`ml-4 ${collapsed ? 'hidden' : 'block'} text-sm font-medium`}>
              {item.label}
            </span>
          </NavLink>
          
        ))}
      </nav>
    </div>
    </>
  )
}
