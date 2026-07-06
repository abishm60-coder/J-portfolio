import React from 'react';
import './Hero.css';
import sketchingImg from '../assets/sketching.png';
import laptopImg from '../assets/laptop.png';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container-inner">
        
        {/* Left Polaroid */}
        <div className="polaroid-wrapper-left">
          <div className="polaroid-card hero-p-left">
            <div className="polaroid-image-container">
              <img src={sketchingImg} alt="Where ideas begin" className="polaroid-img" />
            </div>
            <div className="polaroid-caption">
              <span className="caption-text font-handwriting">where ideas begin</span>
            </div>
          </div>
        </div>

        {/* Center Headline Content */}
        <div className="hero-center-content">
          <div className="title-wrapper">
            <div className="handwriting-annotation-wrapper">
              <svg className="curved-arrow" viewBox="0 0 100 60" width="70" height="42">
                <path d="M 85,30 Q 55,2 10,50" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M 12,38 L 10,50 L 25,48" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="annotation-handwriting">
                crafting meaningful<br />experiences
              </span>
            </div>
            <h1 className="hero-title-main">
              portfolio <span className="highlight-orange">2026</span>
            </h1>
            <div className="hero-sub-titles">
              <span className="sub-left">JERFIN</span>
              <span className="sub-right">CREATIVE PROJECT DESIGNER</span>
            </div>
          </div>
        </div>

        {/* Right Polaroid */}
        <div className="polaroid-wrapper-right">
          <div className="polaroid-card hero-p-right">
            <div className="polaroid-image-container">
              <img src={laptopImg} alt="Bringing ideas to screen" className="polaroid-img" />
            </div>
            <div className="polaroid-caption">
              <span className="caption-text font-handwriting">bringing ideas to screen</span>
            </div>
          </div>
        </div>

      </div>

      {/* Available Indicator Bottom Left */}
      <div className="hero-status-bottom-left">
        <span className="pulse-orange-dot"></span> AVAILABLE FOR PROJECTS
      </div>
    </section>
  );
};
