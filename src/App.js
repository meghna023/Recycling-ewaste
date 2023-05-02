
import React from "react";
import './App.css'
import{ Routes, Route } from 'react-router-dom'
import Home from './route/Home'
import About from './route/About'
import Service from './route/Service'
import Contact from './route/Contact'
import AboutUs from './components/AboutUs'

function App() {
  return (
        <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      </div>
  )
}

export default App
