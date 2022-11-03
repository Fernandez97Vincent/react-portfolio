import React, { useState } from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThankYou from "./components/ThankYou";
import { HashRouter as Router, Routes, Route, BrowserRouter}
    from 'react-router-dom';


import Carousel from './components/Carousel';

function App() {
  return <div>
   

    
      
 
    
    <Routes>
    {/* <Carousel/>  */}
    <Header/>
    <Route path='/' element={<Carousel/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/Thank-You' element={<ThankYou/>} />
    </Routes>
 
    
    
    
    
    {/* <Footer/> */}
  </div>
  
}

export default App;


