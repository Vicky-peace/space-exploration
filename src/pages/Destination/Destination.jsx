import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import './destination.css'
import moonImage from '../../assets/destination/image-moon.webp'
import { useState } from 'react'
import Moon from './Europa';
import Mars from './Mars';
import Europa from './Europa';
import Titan from './Titan';
const Destination = () => {
    return (
        <div className='dest-container'>
          <div className="left-container">
            <h1>01 Pick Your Destination</h1>
          </div>
          <div className="right-container">
            <ul className="dest-navlinks">
              <li>
                <NavLink to="moon" className='nav-link'>Moon</NavLink>
              </li>
              <li>
                <NavLink to="mars" className='nav-link'>Mars</NavLink>
              </li>
              <li>
                <NavLink to="europa" className='nav-link'>Europa</NavLink>
              </li>
              <li>
                <NavLink to="titan" className='nav-link'>Titan</NavLink>
              </li>
            </ul>
            <div className="destination-details-container">
              <Routes>
                <Route path="moon" element={<Moon />} />
                <Route path="mars" element={<Mars />} />
                <Route path="europa" element={<Europa />} />
                <Route path="titan" element={<Titan />} />
              </Routes>
            </div>
          </div>
        </div>
      );
}

export default Destination