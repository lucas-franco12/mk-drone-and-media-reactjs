import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Description from './components/Description';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div id="hero-target"></div>
      <Hero />
      <div id="services-target"></div>
      <Description />
      <Services />
      <div id="about-target"></div>
      <About />
      <div id="gallery-target"></div>
      <Gallery />
      <div id="contact-target"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
