import React from 'react'


import { TrendingUp, IndianRupee, Users, Globe } from 'lucide-react';

export default function Marketing() {
 
    const marketingOptions = [
      {
        id: 'banner',
        title: 'Homepage Banner',
        description: 'Feature your products on the marketplace homepage',
        price: "₹XXX",
        duration: '30 days',
        icon: Globe
      },
      {
        id: 'featured',
        title: 'Featured Products',
        description: 'Highlight your products in search results',
        price: "₹XXX",
        duration: '15 days',
        icon: TrendingUp
      },
      {
        id: 'email',
        title: 'Email Campaign',
        description: 'Reach customers through targeted emails',
        price: "₹XXX",
        duration: 'One-time',
        icon: Users
      }
    ];
   
  return (
    <>
    <main className='rounded'>

   
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-complimentory">Marketing & Advertising</h1>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
        {marketingOptions.map((option) => {
          const Icon = option.icon;
          return (
            <div
              key={option.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow lg p-6"
            >
              <div className="w-12 h-12 bg-complimentory dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {option.description}
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-2xl font-bold">{option.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    /{option.duration}
                  </span>
                </div>
                <button className="bg-complimentory cursor-pointer text-white px-4 py-2 rounded-lg">
                  Comming Soon
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Performance Analytics</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Track the performance of your marketing campaigns and advertising investments.
          </p>
         
        </div>
      </div> */}
    </div>

    </main>
    </>
  )
}
