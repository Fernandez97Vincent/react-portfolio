import React, { useState } from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


import Carousel from './components/Carousel';

function App() {
  return <div>
    <Header/>

    
      
    <Router>
    
    <Routes>
    {/* <Carousel/>  */}
    <Route path='/' element={<Carousel/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<Projects/>} />
    </Routes>
    </Router>
    
    
    
    
    {/* <Footer/> */}
  </div>
  
}

export default App;


