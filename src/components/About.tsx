import React from 'react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-header-center">
          <h2 className="about-headline-text">ABOUT <span className="highlight-orange">JERI</span></h2>
        </div>

        {/* Sprocket Hole Filmstrip gallery (6 frames) */}
        <div className="filmstrip-container">
          <div className="filmstrip-sprockets">
            {Array.from({ length: 22 }).map((_, i) => (
              <div key={i} className="sprocket-hole"></div>
            ))}
          </div>

          <div className="filmstrip-content-gallery-six">
            {/* Frame 1: Portrait mock */}
            <div className="film-frame">
              <svg viewBox="0 0 150 150" className="film-svg">
                <rect width="100%" height="100%" fill="#1a1a1a"/>
                {/* Minimal B/W portrait silhouette representation */}
                <path d="M 40,150 C 40,110 50,90 75,90 C 100,90 110,110 110,150" fill="#333"/>
                <circle cx="75" cy="55" r="22" fill="#333"/>
              </svg>
            </div>
            
            {/* Frame 2: Process mock */}
            <div className="film-frame">
              <svg viewBox="0 0 150 150" className="film-svg">
                <rect width="100%" height="100%" fill="#151515"/>
                <circle cx="75" cy="75" r="30" fill="none" stroke="#444" strokeWidth="2"/>
                <line x1="75" y1="20" x2="75" y2="130" stroke="#222" strokeWidth="1"/>
              </svg>
            </div>

            {/* Frame 3: Design Sketch */}
            <div className="film-frame">
              <svg viewBox="0 0 150 150" className="film-svg">
                <rect width="100%" height="100%" fill="#1f1f1f"/>
                <rect x="35" y="35" width="80" height="80" fill="none" stroke="#555" strokeWidth="2"/>
                <line x1="35" y1="35" x2="115" y2="115" stroke="#333" strokeWidth="1"/>
              </svg>
            </div>

            {/* Frame 4: Device mock */}
            <div className="film-frame">
              <svg viewBox="0 0 150 150" className="film-svg">
                <rect width="100%" height="100%" fill="#1a1a1a"/>
                <rect x="40" y="45" width="70" height="60" rx="4" fill="#333"/>
                <rect x="45" y="50" width="60" height="42" rx="1" fill="#121212"/>
              </svg>
            </div>

            {/* Frame 5: Branding abstract */}
            <div className="film-frame">
              <svg viewBox="0 0 150 150" className="film-svg">
                <rect width="100%" height="100%" fill="#181818"/>
                <circle cx="75" cy="75" r="25" fill="#333"/>
                <path d="M 60,60 L 90,90 M 90,60 L 60,90" stroke="#555" strokeWidth="2"/>
              </svg>
            </div>

            {/* Frame 6: Code outline */}
            <div className="film-frame">
              <svg viewBox="0 0 150 150" className="film-svg">
                <rect width="100%" height="100%" fill="#1f1f1f"/>
                <path d="M 40,50 L 25,75 L 40,100 M 110,50 L 125,75 L 110,100" fill="none" stroke="#444" strokeWidth="3"/>
                <line x1="85" y1="45" x2="65" y2="105" stroke="#444" strokeWidth="3"/>
              </svg>
            </div>

            {/* Circular button overlapping Frame 2 & 3 */}
            <div className="story-circular-button-overlay">
              <span className="story-button-text">TO READ MY STORY</span>
            </div>
          </div>

          <div className="filmstrip-sprockets filmstrip-sprockets-bottom">
            {Array.from({ length: 22 }).map((_, i) => (
              <div key={i} className="sprocket-hole"></div>
            ))}
          </div>
        </div>

        {/* Journey details handwritten paragraph annotation */}
        <div className="journey-bottom-annotation-row">
          <div className="journey-annotation-block">
            <svg className="journey-arrow-left" viewBox="0 0 60 40" width="48" height="32">
              <path d="M 50,30 Q 15,30 20,8" fill="none" stroke="var(--orange-accent)" strokeWidth="1.5" strokeDasharray="3 3"/>
              <path d="M 15,14 L 20,6 L 25,12" fill="none" stroke="var(--orange-accent)" strokeWidth="1.5"/>
            </svg>
            <p className="journey-handwritten-text">
              my journey started with sketching custom lettering and exploring photography long before i discovered design as a career.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
