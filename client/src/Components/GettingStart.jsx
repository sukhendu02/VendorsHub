import React from 'react'

export default function GettingStart() {
  return (
    <>
    <div className="section-1 grid bg-white p-3 rounded-lg" >
        Register - Sell - Earn
    </div>
    <div className='grid grid-cols-2 gap-4 mt-2'>
        <div className='bg-white p-3 rounded'>1</div>
        <div className='bg-white p-5 rounded text-center'>
            <p className='text-slate-500 my-3 font-semibold'>

            Connet Your Store!
            </p>
            <div>

            <button className='bg-primary text-white py-3 px-4 m-2 rounded-lg'>Connect</button>
            </div>
        </div>
    </div>
    </>
  )
}
