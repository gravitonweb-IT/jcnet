import React  from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import About from "../src/components/Aboutsus/About";
import Contact from "../src/components/Contact/Contact";
import Services from "../src/components/Services/Services";
import OurServices from "../src/components/Services/OurServices";
import Portfolio from "./components/Portfolio/Portfolio";
import Navigationbar from "./common/Navigationbar";
import Footer from "./common/Footer";


function App() {
  return (
    <>
    <Navigationbar/>
 
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services/>} />
            <Route path="/OurServices" element={<OurServices />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        
        
      <Footer/>
    
    </>
  );
}

export default App;
