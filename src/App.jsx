import React from 'react';
import './App.css'; // For global styles
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;