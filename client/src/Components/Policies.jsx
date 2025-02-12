import react from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
   
export default function Policies(){

     
    
        
    return(
        <>
        <main className='bg-white rounded p-3'>

        
       
       <TabGroup>
      <TabList className="text-center bg-slate-200 rounded-full w-fit m-auto">
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Tab 1</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Tab 2</Tab>
        <Tab className="p-2 px-4 m-2  rounded-full text-slate-600 text-sm cursor-pointer data-[selected]:bg-white bg-slate-300 shadow-sm data[selected]:shadow-md">Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel className='p-4 m-2 border-2 border-slate-200 rounded'>Content 1

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse pariatur sint fugit est ratione iste aperiam debitis temporibus a. Cupiditate minima a fugit voluptates autem velit consectetur alias ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse pariatur sint fugit est ratione iste aperiam debitis temporibus a. Cupiditate minima a fugit voluptates autem velit consectetur alias ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse pariatur sint fugit est ratione iste aperiam debitis temporibus a. Cupiditate minima a fugit voluptates autem velit consectetur alias ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse pariatur sint fugit est ratione iste aperiam debitis temporibus a. Cupiditate minima a fugit voluptates autem velit consectetur alias ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse pariatur sint fugit est ratione iste aperiam debitis temporibus a. Cupiditate minima a fugit voluptates autem velit consectetur alias ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse pariatur sint fugit est ratione iste aperiam debitis temporibus a. Cupiditate minima a fugit voluptates autem velit consectetur alias ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse pariatur sint fugit est ratione iste aperiam debitis temporibus a. Cupiditate minima a fugit voluptates autem velit consectetur alias ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse pariatur sint fugit est ratione iste aperiam debitis temporibus a. Cupiditate minima a fugit voluptates autem velit consectetur alias ut!
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
            </div>

        </TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
    </main>

        </>
    )
}