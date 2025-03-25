import React from 'react';
import { IndianRupee, DollarSign,ShoppingBag, Store,Clock ,Users, TrendingUp, LogOut } from 'lucide-react';
import UserProfile from './Auth/Profile';
// import Logout from './Auth/Logout';
import {useAuth} from "../Context/AuthContext";
import Logout from './Auth/Logout';
const stats = [
  {
    title: 'Total Revenue',
    value: '₹0.00',
    change: '0.0%',
    icon: DollarSign,
    color: 'bg-green-500'
  },
  {
    title: 'Total Orders',
    value: '0',
    change: '0.0%',
    icon: ShoppingBag,
    color: 'bg-blue-500'
  },
  {
    title: 'Total Users',
    value: '0',
    change: '0.0%',
    icon: Users,
    color: 'bg-purple-500'
  },
  {
    title: 'Ranking ',
    value: '0',
    change: '0.0%',
    icon: TrendingUp,
    color: 'bg-yellow-500'
  }
];

export default function DashboardStats() {
  const { user } = useAuth();
  return (
    <>

 

    <div className="p-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg mb-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Introductory Free Plan</h2>
                <p className="text-purple-100">Start selling on our platform with zero costs</p>
                <div className="flex space-x-8">
                  <div className="flex items-center space-x-2">
               
                    <IndianRupee className="w-5 h-5 text-purple-200" />
                    <span className="text-white font-semibold">₹0 Setup Cost</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Store className="w-5 h-5 text-purple-200" />
                    <span className="text-white font-semibold">₹0 Monthly Fee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-purple-200" />
                    <span className="text-white font-semibold">Limited Time Offer</span>
                  </div>
                </div>
                {/* <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Get Started Now
                </button> */}
              </div>
              </div>
              </div>
  
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