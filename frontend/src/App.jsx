import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CoreSystems from './pages/CoreSystems';
import SkillNetMastery from './pages/SkillNetMastery';
import FarmToHome from './pages/FarmToHome';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/core-systems" element={<CoreSystems />} />
            <Route path="/skillnet-mastery" element={<SkillNetMastery />} />
            <Route path="/farm-to-home" element={<FarmToHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
