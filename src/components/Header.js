import React from 'react'
import logo from '../Assets/logo.webp';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <div className='flex'>
      <div>
      <Link to={"/"}><img src={logo} className='w-[120px] ml-20 mt-6'/></Link> 
      </div>
      <div >
      <NavLinks/>
      </div>
      <div className='mt-16 ml-44'>
      <a  className='text-xl' href="tel:6303521018">(630) 352-1018</a>
      </div>
    </div>
  )
}

export default Header