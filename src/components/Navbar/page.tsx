import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='h-[90px]  bg-red-300'>
        <div className='flex  py-5 justify-around'>
         <Link href='/Client-side'><span className='text-white font-semibold hover:underline  text-xl sm:text-2xl drop-shadow-lg'>Client-Side</span></Link>
        <Link href='/'><span className='text-white font-semibold text-3xl  drop-shadow-lg'>Assignment 7</span></Link>
        <Link href='/Server-side'><span className='text-white font-semibold hover:underline text-xl sm:text-2xl drop-shadow-lg'>Server-Side</span></Link>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
