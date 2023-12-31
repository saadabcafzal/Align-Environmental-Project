import React, { useState } from 'react'

const AboutComponent = ({heading,AboutImage1,para1,para2,para3,para4,para5,para6,para7,para8}) => {
    const [showFullText, setShowFullText] = useState(false);

  const handleShowMore = () => {
    setShowFullText(true);
  };

  const handleShowLess = () => {
    setShowFullText(false);
  };
  return (
      <div>
        <img src={AboutImage1} alt="About" className='w-[500px]' />
        <h1 className='text-white'>{heading}</h1>
        {showFullText ? (
          <>
            <p className='text-gray-500'>
              {para1}
            </p>
            <p className='text-gray-500'>
              {para2}
            </p>
            <p className='text-gray-500'>
              {para3}
            </p>
            <p className='text-gray-500'>
              {para4}
            </p>
            <p className='text-gray-500'>
             {para5}
            </p>
            <p className='text-gray-500'>
             {para6}
            </p>
            <p className='text-gray-500'>
              {para7}
            </p>
            <button className='text-teal-500' onClick={handleShowLess}>Show Less</button>
          </>
        ) : (
          <>
            <p className='text-gray-500'>
              {para8}
            </p>
            <button className='text-teal-500'  onClick={handleShowMore}>+ Show More</button>
          </>
        )}
      </div>
  )
}

export default AboutComponent