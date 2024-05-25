import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'
const Home = () => {
  return (
    <div className='homepage'>
         <div className="home-left">
          <div  className="header">
            So, You Want To Travel To
          </div>
          <h1>Space</h1>
          <p>let's face it; if you want to go  space, you might as well <br />
          genuinely go outer space and not hover kind of oon the edge <br />
          of it, well sit back, and relax because we'll give you a truly <br />out of this world experience!</p>
         </div>
         <div className="circle">
          <NavLink to="/dest" className="circle-text">Explore</NavLink>
         </div>
    </div>
  )
}

export default Home