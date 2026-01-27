import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services';
import Gallery from './Gallery';
import Reviews from './Reviews';


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}