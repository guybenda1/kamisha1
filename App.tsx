import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Studio from './components/Studio';
import Classes from './components/Classes';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <Hero />
      <About />
      <Studio />
      <Classes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;