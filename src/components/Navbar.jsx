import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'
import logo from '../assets/shared/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="logo">
            <img src={logo} alt="Logo" />
       </div>
       <div className="nav-container">
           <ul>
              <li className="nav-item">
               <NavLink to="/" className="nav-link">00 Home</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/dest" className="nav-link">01 Destination</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/crew" className="nav-link">02 Crew</NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/tech" className="nav-link">03 Technology</NavLink>
              </li>
            
           </ul>
       </div>


    </div>
  )
}

export default Navbar