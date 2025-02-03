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
                Panel 1
                <form action="">
                  {step ===1 &&(
                    <>
                    <input type="text" name="" id="" placeholder='something'/>
                    <input type="text" name="" id="" placeholder='something'/>
                    <input type="text" name="" id="" placeholder='something'/>
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
