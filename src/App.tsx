import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Services />
        <Capabilities />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;