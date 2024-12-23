import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

export default function Error() {
  return (
    <div className='py-52 my-7 text-center bg-[#A8E05C] text-[rgb(51,51,51)] w-10/12 mx-auto rounded-xl'>
      <Helmet>
        <title>VolunForce | Error</title>
      </Helmet>
      <h1 className=' text-4xl font-bold'>ERROR - 404</h1>
      <p className='text-lg mt-5 font-semibold'>Pages Are Not Found</p>
      <p className='text-lg mt-5 font-semibold'>Please go to - <Link to='/' className='border-b-2 text-green-800 border-green-800'>Home</Link></p>
    </div>
  )
}
