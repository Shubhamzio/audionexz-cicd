import React from "react";
import "./Loader.css";

const Loader = ({ progress }) => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        {/* Animated circles */}
        <div className="loader-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>

        {/* Central rotating element */}
        <div className="loader-center">
          <div className="loader-ring"></div>
          <div className="loader-ring-2"></div>
          <div className="loader-core">
            <div className="pulse"></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{Math.round(progress)}%</div>
        </div>

        {/* Loading text */}
        <div className="loading-text">
          <span className="letter">L</span>
          <span className="letter">O</span>
          <span className="letter">A</span>
          <span className="letter">D</span>
          <span className="letter">I</span>
          <span className="letter">N</span>
          <span className="letter">G</span>
          <span className="dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>

        {/* Particle effects */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                "--delay": `${i * 0.1}s`,
                "--angle": `${i * 18}deg`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
