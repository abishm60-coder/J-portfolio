import React from 'react';
import './About.css';
import aboutJeri1 from '../assets/about_jeri_1.png';
import aboutJeri2 from '../assets/about_jeri_2.png';
import aboutJeri3 from '../assets/about_jeri_3.png';
import aboutJeri4 from '../assets/about_jeri_4.png';
import aboutJeri5 from '../assets/about_jeri_5.png';
import aboutJeri6 from '../assets/about_jeri_6.png';

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
            {/* Frame 1: Portrait */}
            <div className="film-frame">
              <img src={aboutJeri1} alt="Jeri Portrait 1" className="film-img" />
            </div>
            
            {/* Frame 2: Process */}
            <div className="film-frame">
              <img src={aboutJeri2} alt="Jeri Portrait 2" className="film-img" />
            </div>

            {/* Frame 3: Design Sketch */}
            <div className="film-frame">
              <img src={aboutJeri3} alt="Jeri Portrait 3" className="film-img" />
            </div>

            {/* Frame 4: Device mock */}
            <div className="film-frame">
              <img src={aboutJeri4} alt="Jeri Portrait 4" className="film-img" />
            </div>

            {/* Frame 5: Branding abstract */}
            <div className="film-frame">
              <img src={aboutJeri5} alt="Jeri Portrait 5" className="film-img" />
            </div>

            {/* Frame 6: Code outline */}
            <div className="film-frame">
              <img src={aboutJeri6} alt="Jeri Portrait 6" className="film-img" />
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
              <path d="M 50,30 Q 15,30 20,8" fill="none" stroke="var(--orange-accent)" strokeWidth="1.5"/>
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
