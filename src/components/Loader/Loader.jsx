import React, { useState, useEffect } from "react";
import "./Loader.css";

// Moved outside component to prevent dependency warnings
const sentences = [
  "Architectural Acoustics",
  "Professional AV Integration",
  "Immersive Audio Solutions",
  "Precision System Calibration",
  "Audionexz",
];

const Loader = ({ progress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sentences.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [progress]); // Clean dependency array - no warnings

  return (
    <div className={`loader-overlay ${progress >= 100 ? "fade-out" : ""}`}>
      {/* Subtle animated background grain */}
      <div className="noise-overlay"></div>

      {/* Sound wave visualization */}
      <div className="wave-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="wave-bar" style={{ "--i": i }}></div>
        ))}
      </div>

      {/* Main content */}
      <div className="loader-content">
        <div className="text-container">
          {sentences.map((sentence, index) => (
            <h1
              key={index}
              className={`loader-text ${
                index === currentIndex ? "active" : ""
              } ${index < currentIndex ? "past" : ""}`}
            >
              {sentence}
            </h1>
          ))}
        </div>

        {/* Minimal progress indicator */}
        <div className="progress-wrapper">
          <div className="progress-line">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-percentage">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="ambient-glow blue"></div>
      <div className="ambient-glow purple"></div>
    </div>
  );
};

export default Loader;
