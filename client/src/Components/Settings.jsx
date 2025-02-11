// import { Settings } from 'lucide-react';
import react from 'react';

export default function Settings(){
    return(
<>
<main className='bg-white p-3 rounded'>

<h5 className='text-xl font-semibold text-slate-700 p-3 m-2'>Settings</h5>

<div className="mainbox-1 border-2 border-slate-100 rounded flex justify-between text-sm p-4 m-2 align-middle">
    <div className='text-slate-700'>Connect your store</div>
    <div><button className='bg-secondary text-white px-4 py-2 rounded cursor-pointer align-middle'>Connect</button></div>
</div>
</main>

</>
    )
}