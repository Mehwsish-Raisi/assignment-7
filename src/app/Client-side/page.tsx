"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";

interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  }
}

const ClientSidePage = () => {

  const [data, setData] = useState<Products[]>([]);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)

    const fetchData = async () => {
      const response = await fetch ("https://fakestoreapi.com/products");
      const parsedResponse: Products[] = await response.json();
      setData(parsedResponse);
    };
    fetchData();

  }, [])

  return (
    <div>
      {loading ? (
        
        <div className='mt-20 flex justify-center items-center'> 
          <h1 className='text-3xl font-bold'>Loading....</h1>
           </div>
      ) : (
        <div className='mt-10'>
        <h1 className="text-2xl mb-10 font-semibold text-center underline">
        Client Side Data Fetching
      </h1>
    <div className="grid px-4 lg:px-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((products, index) => (
        <div key={index} className='shadow-lg rounded cursor-pointer '>
          <div className='flex justify-center h-[180px]'>
            <Image src={products.image} alt='images' width={150} height={150} />
          </div>
          <div className='flex flex-col gap-4 px-6'>
          <p className='capitalize text-slate-400'>{products.category}</p>
          <p className='text-xl font-semibold text-red-500'>{products.title}</p>
          <p className='line-clamp-2'>{products.description}</p>
          <div className='flex justify-between '>
          <p className='font-bold'>${products.price}</p>
          <div className='flex gap-3 text-yellow-400'>
          <div className='flex gap-1'>
          <IoIosStar size={25} />
          {products.rating.rate}
          </div>
          <p>({products.rating.count} reviews)</p>
          </div>
          </div>
          
          <button className='bg-red-300 mb-4 rounded-xl px-2 py-2 text-white font-medium hover:bg-red-500'>Buy Now</button>
          
          </div>
          </div>
      ))}
    </div>
    </div>
      ) }
      
      
    </div>
  )
}

export default ClientSidePage
