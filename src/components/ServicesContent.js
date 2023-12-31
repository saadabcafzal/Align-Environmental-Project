import React from 'react'

const ServicesContent = ({src_image,heading,para}) => {
  return (
    <div>
        <img className='w-[400px]' src={src_image}/>
        <h1 className='text-teal-500 text-center'>{heading}</h1>
        <p className='text-gray-500 text-center'>{para}</p>
    </div>
  )
}

export default ServicesContent