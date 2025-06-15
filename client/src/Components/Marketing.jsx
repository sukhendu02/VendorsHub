import React from 'react'


import { TrendingUp, IndianRupee, Users, Globe,Star,Coins,Megaphone,Mail } from 'lucide-react';

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
    {/*  
      <h1 className="text-2xl font-bold mb-6 text-complimentory">Marketing & Advertising</h1>
      */}
        {/* Featured Products Banner */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-emerald-600" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900">
                  Featured Product Placement
                </h2>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Showcase your products to thousands of potential customers!
              </p>
              <div className="mt-4 space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-600/10 rounded-full">
                  <Star className="h-5 w-5 text-emerald-600" />
                  <span className="ml-2 text-emerald-900 font-semibold">
                    Premium placement on our homepage
                  </span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-teal-600/10 rounded-full">
                  <Coins className="h-5 w-5 text-teal-600" />
                  <span className="ml-2 text-teal-900 font-semibold">
                    Starting at just $99/month
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-emerald-600/20">
                <span className="text-3xl font-bold text-emerald-700">$99</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      {/* Social Media Campaign Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center">
                <Megaphone className="h-8 w-8 text-blue-600" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900">
                  Social Media Promotion
                </h2>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Reach millions through our social media channels!
              </p>
              <div className="mt-4 space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full">
                  <Star className="h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-blue-900 font-semibold">
                    Featured across all our platforms
                  </span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-indigo-600/10 rounded-full">
                  <Coins className="h-5 w-5 text-indigo-600" />
                  <span className="ml-2 text-indigo-900 font-semibold">
                    Complete package for $199/month
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-600/20">
                <span className="text-3xl font-bold text-blue-700">$199</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Email Marketing Banner */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center">
                <Mail className="h-8 w-8 text-rose-600" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900">
                  Email Campaign Service
                </h2>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Direct marketing to our engaged subscriber base!
              </p>
              <div className="mt-4 space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-rose-600/10 rounded-full">
                  <Star className="h-5 w-5 text-rose-600" />
                  <span className="ml-2 text-rose-900 font-semibold">
                    Reach 100,000+ active subscribers
                  </span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-pink-600/10 rounded-full">
                  <Coins className="h-5 w-5 text-pink-600" />
                  <span className="ml-2 text-pink-900 font-semibold">
                    Special offer: $149/campaign
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-rose-600/20">
                <span className="text-3xl font-bold text-rose-700">$149</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      {/* <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
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
      </div> */}
      
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
