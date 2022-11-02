import React, { useState } from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About';


import Carousel from './components/Carousel';

function App() {
  return <div>
    <Header/>

    <main>
      
    <About/>
    <Carousel/>
    </main>
    <Footer/>
  </div>
  
}

export default App;