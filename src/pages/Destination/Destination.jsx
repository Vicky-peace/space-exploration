import React from 'react'
import { NavLink } from 'react-router-dom'
import './destination.css'
const Destination = () => {
  return (
    <div className='dest-container'>
         <div className="left-container">
            <h1>01 Pick Your Destination</h1>
         </div>
         <div className="right-container">
            <ul className="dest-navlinks">
                <li>
                    <NavLink to="/moon" className='nav-link'>Moon</NavLink>
                </li>
                <li>
                    <NavLink to="/mars" className='nav-link'>Mars</NavLink>
                </li>
                <li>
                    <NavLink to="/europa" className='nav-link'>Europa</NavLink>
                </li>
                <li>
                    <NavLink to="/titan" className='nav-link'>Titan</NavLink>
                </li>
            </ul>
         </div>
    </div>
  )
}

export default Destination