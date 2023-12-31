import React from 'react'
import NavLinks from './NavLinks'

const Footer = () => {
  return (
    <div className='bg-black'>
    <hr/>
      <div className='ml-20 pt-6 '>
        <p className='text-gray-500'>COPYRIGHT © 2023 ALIGN ENVIRONMENTAL SOLUTIONS, LLC - ALL RIGHTS</p>
        <p className='text-gray-500'>RESERVED.</p>
      </div>
      <div className='pb-4 flex justify-center -ml-40'>
      <NavLinks textColor={"text-teal-500"}/>
      </div>
    </div>
  )
}

export default Footer