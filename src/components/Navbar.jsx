import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'
import logo from '../assets/shared/logo.svg';

const Navbar = () => {
  const {isOpen, setIsOpen} =  useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='navbar'>
       <div className="logo">
            <img src={logo} alt="Logo" />
       </div>
       <div className={`nav-container  ${isOpen ? 'open' : ''}`}>
        <button className="humberger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
           <ul>
              <li className="nav-item">
               <NavLink to="/" className="nav-link"onClick={toggleNav}>00 Home</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/dest" className="nav-link" onClick={toggleNav}>01 Destination</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/crew" className="nav-link" onClick={toggleNav}>02 Crew</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/tech" className="nav-link" onClick={toggleNav}>03 Technology</NavLink>
              </li>
            
           </ul>
       </div>


    </div>
  )
}

export default Navbar