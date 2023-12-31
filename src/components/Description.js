import React from 'react'

const Description = ({heading,para2,para1}) => {
  return (
    <div>
        <h1 className='text-teal-500 text-2xl'>{heading}</h1>
        <p className='text-gray-500 text-xl '>{para1}</p>
        <p className='text-gray-500 text-xl'>{para2}</p>
    </div>
  )
}

export default Description