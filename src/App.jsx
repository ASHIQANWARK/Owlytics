import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Changed to HashRouter
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SolutionsSection from './pages/Solutions';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solution" element={<SolutionsSection />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
