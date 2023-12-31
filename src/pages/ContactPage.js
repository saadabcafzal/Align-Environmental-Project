import React from 'react'

const ContactPage = () => {
  return (
    <div className='bg-black mt-8 pt-8'>
    <div className='flex flex-col gap-y-6'>
      <h1 className='text-teal-500 text-center text-4xl'>Subscribe</h1>
      <p className='text-gray-500 text-center text-2xl'>Sign up, we work to find a solution to your environmental needs!</p>
      <p className='text-gray-500 text-center text-2xl'>Including maximum eligible reimbursement from the IEPA LUST Fund.</p>
      <div className='flex gap-x-4 justify-center'>
        <input type='email' placeholder='Enter your email' className='w-[600px] rounded-md p-2'/>
        <button className='border border-teal-500 bg-teal-500 p-4 rounded-md '>Sign Up</button>
      </div>
    </div>
    <div className='w-full flex '>
      <div className='ml-8 w-[50%] flex flex-col gap-y-8'>
            <h1 className='text-teal-500 text-2xl mt-8'>Tell us what you need:</h1>
          <h2 className='text-gray-500 text-2xl ' >Drop us a line!</h2>
          <input className='rounded-md p-2' type='text' placeholder='Name'/>
          <input className='rounded-md p-2' type='email' placeholder='email'/>
          <textarea  cols={5} rows={8} placeholder='message' className='w-full rounded-md'/>
          <input className='rounded-md p-2' type='number' placeholder='CONTACT NUMBER'/>
          <button  className='border rounded-md bg-teal-500 text-white p-2'>SEND</button>
      </div>
      <div className='w-[50%] flex-col gap-y-4 ml-8 mt-20 mb-20'>
            <h1 className='text-white text-4xl'>Or call us!</h1>
            <h2 className='text-gray-500 text-xl'>We appreciate our customers, so feel free to call (630) 352-1018.</h2>
            <h1 className='text-2xl text-white'>Align Environmental Solutions, LLC</h1>
            <h3 className='text-gray-500 text-xl'>P. O. Box 9099, Naperville, Illinois 60567, United States</h3>
            <p className='text-teal-500'>(630) 352-1018</p>
            <p className='text-teal-500'>email@alignenv.com</p>
            <h1 className='text-white'>Hours</h1>
            <div className='text-gray-500 text-xl flex flex-col gap-y-4'>
            <p>Mon
            09:00 am – 05:00 pm
            </p>
            <p>Tues
            09:00 am – 05:00 pm
            </p>
            <p>Wed
            09:00 am – 05:00 pm
            </p>
            <p>Thurs
            09:00 am – 05:00 pm
            </p>
            <p>Fri
            09:00 am – 05:00 pm
            </p>
            <p>Sat
            Closed
            </p>
          <p>Sun
          Closed
          </p>
            </div>
      </div>
    </div>
    </div>
  )
}

export default ContactPage