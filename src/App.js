import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/Aboutsus/About';
import Contact from './components/Contact';
import Services from './components/Services/Services';
// Import OurServices and Portfolio components if needed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          {/* Uncomment and add routes for OurServices and Portfolio if needed */}
          {/* 
          <Route path="/ourservice" element={<OurServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
