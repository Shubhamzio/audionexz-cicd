import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import Consultancy from './components/Consultancy/Consultancy';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (

      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />

        </Routes>
      </div>

  );
}

export default App;