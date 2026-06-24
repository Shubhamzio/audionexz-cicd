import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Consultancy from "./components/Consultancy/Consultancy";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Loader from "./components/Loader/Loader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import useImagePreloader from "./hooks/useImagePreloader";
import { getProcessedImagePaths } from "./utils/imageCollector";
import "./App.css";

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    // Only show loader on first visit in this session
    return !sessionStorage.getItem("hasVisited");
  });

  // Get all image paths
  const allImagePaths = showLoader ? getProcessedImagePaths() : [];

  // Preload images
  const { imagesLoaded, loadingProgress } = useImagePreloader(allImagePaths);

  useEffect(() => {
    if (imagesLoaded && showLoader) {
      // Small delay for smooth transition
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded, showLoader]);

  // Prevent scrolling while loader is visible
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showLoader]);

  return (
    <div className="App">
      {/* Loader - Shows only on first load */}
      {showLoader && <Loader progress={loadingProgress} />}

      {/* Main Content - Hidden until loaded */}
      <div
        className={`app-content ${!showLoader ? "app-content-visible" : ""}`}
      >
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
    </div>
  );
}

export default App;
