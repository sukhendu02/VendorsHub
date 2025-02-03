import React from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import { useState } from 'react';

export default function GettingStart() {




  const [step,setStep]= useState(1);
  return (
    <>
    <div className="section-1 grid bg-white p-3 rounded shadow-sm" >
        Register - Sell - Earn
    </div>
    {/* <div className='grid grid-cols-2 gap-4 mt-2'>
        <div className='bg-white p-3 rounded'>1</div>
        <div className='bg-white p-5 rounded text-center'>
            <p className='text-slate-500 my-3 font-semibold'>

            Connet Your Store!
            </p>
            <div>

            <button className='bg-primary text-slate-600 py-3 px-4 m-2 rounded-lg'>Connect</button>
            </div>
        </div>
    </div> */}

    <div className='bg-white rounded mt-2 p-3 text-sm shadow-sm'>
    <h4 className="text-center font-medium text-lg text-secondary my-2">Register your business and Start Earing </h4>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veniam, neque explicabo ratione repudiandae vel dignissimos rem alias sed eum eaque aperiam? Unde asperiores quae consequuntur delectus animi tempore libero?</p> */}

      <div className="text-center ">
        <div>
          <TabGroup>
            <TabList className="flex justify-center m-auto my-4 w-fit bg-slate-100 rounded-2xl text-slate-800 ">
              <Tab className=" p-1 px-4  rounded-2xl cursor-pointer data-[selected]:bg-secondary  focus:outline-none transition ease-in-out duration-300 text-secondary data-[selected]:text-white">Registerd</Tab>
              <Tab className="p-1 px-4 rounded-2xl cursor-pointer data-[selected]:bg-secondary focus:outline-none transition ease-in-out duration-300 text-secondary data-[selected]:text-white ">Non Registerd</Tab>
              
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* Onboarding form for Registerd */}

                <form action="" className='p-3 m-2 sm:p-5 w-5/6 m-auto'>

                <div className="mb-8">
      <div className="flex justify-between items-center">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`flex items-center ${item !== 3 ? "flex-1" : ""}`}
          >
            {/* Step Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= item ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {item}
            </div>

            {/* Connector Line */}
            {item !== 3 && (
              <div
                className={`flex-1 h-1 mx-4 ${
                  step >= item + 1 ? "bg-primary" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
                  {step ===1 &&(
                    <>
                  
<div className="flex justify-between">


<div className="relative my-4  w-1/2 m-3">
      <input
        type="text"
        required
        autoComplete="off"
        className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer"
      />
      <label
        className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white  text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white"
      >
        First Name
      </label>
    </div>
<div className="relative my-4  w-1/2 m-3">
      <input
        type="text"
        required
        autoComplete="off"
        className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer text-slate-500"
      />
      <label
        className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white"
      >
        Last Name
      </label>
    </div>

    </div>
<div className="flex justify-between">


<div className="relative my-4  w-1/2 m-3">
      <input
        type="text"
        required
        autoComplete="off"
        className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer"
      />
      <label
        className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white"
      >
        First Name
      </label>
    </div>
<div className="relative my-4  w-1/2 m-3">
      <input
        type="text"
        required
        autoComplete="off"
        className="w-full p-3.5 border-2 border-gray-300 bg-transparent rounded-2xl outline-none focus:border-slate-400 peer text-slate-500"
      />
      <label
        className="absolute left-0 p-3 ml-2 text-slate-00 transition-all peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:ml-5 peer-focus:px-2 peer-focus:bg-white text-slate-500 peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:ml-5 peer-valid:px-2 peer-valid:bg-white"
      >
        Last Name
      </label>
    </div>

    </div>
                    </>
                  )}
                  {step ===2 &&(
                    <>
                    </>
                  )}
                  {step ===3 &&(
                    <>
                    </>
                  )}
                </form>
              </TabPanel>
              <TabPanel>
                {/* Onboarding form for Registerd
                 */}
                Panel 2
              </TabPanel>
            </TabPanels>
            
          </TabGroup>
        </div>
      </div>
     

     
    </div>
    </>
  )
}
