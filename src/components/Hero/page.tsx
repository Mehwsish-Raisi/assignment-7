import React from 'react'
import Link from 'next/link'

const HeroPage = () => {
  return (
    <div className=''>
       <div className='flex justify-center  items-center'>
    <div className='flex bg-red-100 shadow-lg mx-4 sm:w-[600px] mt-20 items-center justify-center'>
      <div className='py-6'>
          <h1 className=' text-2xl font-semibold underline pb-8  text-center'>API Data Fetching</h1>
          <p className='text-sm text-gray-700 text-center px-4'>
              API Data Fetching allows us to retrieve data from a server to dynamically display or process it in our applications. This can be done using techniques like client-side or server-side fetching.
            </p>
          <div className='mt-4 flex gap-5 justify-center'>
         <Link href='/Client-side'><button className='text-xl hover:bg-red-400 sm:px-3 rounded-xl sm:py-2 shadow-xl bg-slate-100'>Client Side Data Fetching </button></Link>
         <Link href='/Server-side'><button className='text-xl hover:bg-red-400 sm:px-3 rounded-xl sm:py-2 shadow-xl bg-slate-100'>Server Side Data Fetching</button></Link>
         </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default HeroPage
