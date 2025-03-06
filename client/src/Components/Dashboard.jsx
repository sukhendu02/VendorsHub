import React from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp, LogOut } from 'lucide-react';
import UserProfile from './Auth/Profile';
// import Logout from './Auth/Logout';
import {useAuth} from "../Context/AuthContext";
import Logout from './Auth/Logout';
const stats = [
  {
    title: 'Total Revenue',
    value: '$54,230',
    change: '+12.5%',
    icon: DollarSign,
    color: 'bg-green-500'
  },
  {
    title: 'Total Orders',
    value: '1,240',
    change: '+8.2%',
    icon: ShoppingBag,
    color: 'bg-blue-500'
  },
  {
    title: 'Total Users',
    value: '3,423',
    change: '+5.4%',
    icon: Users,
    color: 'bg-purple-500'
  },
  {
    title: 'Conversion Rate',
    value: '2.4%',
    change: '+1.2%',
    icon: TrendingUp,
    color: 'bg-yellow-500'
  }
];

export default function DashboardStats() {
  const { user } = useAuth();
  return (
    <>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="text-white" size={24} />
            </div>
            <span className="text-green-500 text-sm font-semibold">
              {stat.change}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm mb-1">{stat.title}</h3>
          <p className="text-2xl font-bold">{stat.value}</p>

        
        </div>
      ))}

      
    </div>

    <div className='grid grid-cols-2 gap-4 '>
      <div className='bg-white p-12 rounded-xl h-72 text-slate-400 text-sm flex justify-center items-center'>No Data to Show</div>
      <div className='bg-white p-12 rounded-xl h-72 text-slate-400 text-sm flex justify-center items-center'>No Data to Show</div>
      
    </div>

    

    </>
  );
}