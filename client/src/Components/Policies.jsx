import react from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
   
import { Info } from 'lucide-react'
export default function Policies(){

     
    
        
    return(
        <>
        <main className='bg-white rounded p-3'>

        
        <div className='bg-sky-100 text-complimentory border-l-6 text-xs p-2 w-fit m-4'>
        <Info className='inline' size={12} /> By completing the vendor onboarding process, the vendor automatically agrees to all marketplace terms and policies and be bound by any future updates. 
        </div>
       
       <TabGroup>
       
      <TabList className="text-center  rounded-full w-fit m-auto">
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Registration, Account, and Conduct Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Product Listing, Content & Pricing Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Order Fulfillment, Shipping & Delivery Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Return, Refund, Cancellation & Dispute Resolution Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Payment, Commission & Financial Policy</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Data Privacy, Promotions & General Terms Policy</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
            <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Registration, Account, and Conduct Policy</h2>
            </div>

            <div className='p-6 text-xs  text-slate-600'>

           

         
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero, reiciendis non accusantium ratione repellat consequuntur eum odit optio, maxime ipsum laborum culpa, quae asperiores inventore dicta assumenda mollitia nesciunt.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero, reiciendis non accusantium ratione repellat consequuntur eum odit optio, maxime ipsum laborum culpa, quae asperiores inventore dicta assumenda mollitia nesciunt.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero, reiciendis non accusantium ratione repellat consequuntur eum odit optio, maxime ipsum laborum culpa, quae asperiores inventore dicta assumenda mollitia nesciunt.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero, reiciendis non accusantium ratione repellat consequuntur eum odit optio, maxime ipsum laborum culpa, quae asperiores inventore dicta assumenda mollitia nesciunt.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero, reiciendis non accusantium ratione repellat consequuntur eum odit optio, maxime ipsum laborum culpa, quae asperiores inventore dicta assumenda mollitia nesciunt.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero, reiciendis non accusantium ratione repellat consequuntur eum odit optio, maxime ipsum laborum culpa, quae asperiores inventore dicta assumenda mollitia nesciunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa itaque vitae nam distinctio iure nisi, reprehenderit asperiores, ratione at expedita laborum, perspiciatis necessitatibus sit delectus voluptatibus rem quo quaerat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eaque eius! Nemo voluptate sapiente, veniam sit nobis nulla totam fugit. Reprehenderit non eum nisi aut provident amet officiis, omnis porro.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero, reiciendis non accusantium ratione repellat consequuntur eum odit optio, maxime ipsum laborum culpa, quae asperiores inventore dicta assumenda mollitia nesciunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa itaque vitae nam distinctio iure nisi, reprehenderit asperiores, ratione at expedita laborum, perspiciatis necessitatibus sit delectus voluptatibus rem quo quaerat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eaque eius! Nemo voluptate sapiente, veniam sit nobis nulla totam fugit. Reprehenderit non eum nisi aut provident amet officiis, omnis porro.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero, reiciendis non accusantium ratione repellat consequuntur eum odit optio, maxime ipsum laborum culpa, quae asperiores inventore dicta assumenda mollitia nesciunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa itaque vitae nam distinctio iure nisi, reprehenderit asperiores, ratione at expedita laborum, perspiciatis necessitatibus sit delectus voluptatibus rem quo quaerat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eaque eius! Nemo voluptate sapiente, veniam sit nobis nulla totam fugit. Reprehenderit non eum nisi aut provident amet officiis, omnis porro.
            </div>
            </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Product Listing, Content & Pricing Policy </h2>
            </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Order Fulfillment, Shipping & Delivery Policy</h2>
            </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Return, Refund, Cancellation & Dispute Resolution Policy</h2>
            </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Payment, Commission & Financial Policy</h2>
            </div>
        </TabPanel>
        <TabPanel>
        <div className='p-4 m-4 text-center bg-linear-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl  sticky top-0 backdrop-blur-lg mb-4 '>
                <h2 className='text-lg font-bold '>Data Privacy, Promotions & General Terms Policy</h2>
            </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    </main>

        </>
    )
}