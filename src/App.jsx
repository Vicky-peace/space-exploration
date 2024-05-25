import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar'
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';


function App() {
 

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/dest' Component={Destination}/>
      </Routes>

    </Router>
    
    </>
  )
}

export default App
