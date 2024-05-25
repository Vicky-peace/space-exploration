import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar'


function App() {
 

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
          {/* <Route path='' Component=/> */}
      </Routes>

    </Router>
    
    </>
  )
}

export default App
