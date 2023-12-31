import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({textColor}) => {
  return (
  <>
    <ul className='flex gap-x-12 mt-16 ml-44'>
  <li className={`nav-item border-b-2 text-2xl border-transparent transition border-black hover:border-green-300  + ${textColor}`}>
    <Link to={"/"} className="nav-link ">HOME</Link>
  </li>  
  <li className={`nav-item border-b-2 text-2xl border-transparent transition border-black hover:border-green-300 + ${textColor}`}>
    <Link to={"/services"} className="nav-link">SERVICES</Link>
  </li>   
  <li className={`nav-item border-b-2 text-2xl border-transparent transition border-black hover:border-green-300 + ${textColor}`}>
    <Link to={"/about"} className="nav-link">ABOUT</Link>
  </li>   
  <li className={`nav-item border-b-2 text-2xl border-transparent transition border-black hover:border-green-300 + ${textColor}`}>
    <Link to={"/contact"} className="nav-link">CONTACT</Link>
  </li>   
      </ul>
      </>
  )
}

export default NavLinks