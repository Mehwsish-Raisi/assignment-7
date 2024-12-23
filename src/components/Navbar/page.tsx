import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='h-[90px]  bg-red-300'>
        <div className='flex  py-7 justify-around'>
         <Link href='/Client-side'><span className='text-white font-semibold hover:underline  lg:text-2xl drop-shadow-lg'>Client-Side</span></Link>
        <Link href='/'><span className='text-white font-bold text-xl lg:text-3xl  drop-shadow-lg'>Assignment 7</span></Link>
        <Link href='/Server-side'><span className='text-white font-semibold hover:underline  lg:text-2xl drop-shadow-lg'>Server-Side</span></Link>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
