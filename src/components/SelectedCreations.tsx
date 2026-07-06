import React from 'react';
import './SelectedCreations.css';

export const SelectedCreations: React.FC = () => {
  return (
    <section id="work" className="creations-section">
      <div className="creations-container">
        
        <div className="creations-header-center">
          <h2 className="creations-title-main">SELECTED CREATIONS</h2>
          <p className="creations-subtitle-handwriting">
            a collection of products, brands, and visual experiences I've crafted over the years
          </p>
        </div>

        <div className="polaroid-grid-mock">
          {/* Card 1: digital experience */}
          <div className="polaroid-item p-item-1">
            {/* Torn paper visual overlay container */}
            <div className="torn-overlay-header"></div>
            <div className="polaroid-card">
              <div className="polaroid-image-container">
                {/* SVG mock representational graphic for digital experience */}
                <svg viewBox="0 0 240 180" className="vector-art">
                  <rect width="100%" height="100%" fill="#eee"/>
                  {/* Tablet frame */}
                  <rect x="30" y="20" width="180" height="130" rx="6" fill="#121212"/>
                  <rect x="38" y="28" width="164" height="114" rx="2" fill="#fff"/>
                  {/* Website text block */}
                  <rect x="50" y="40" width="50" height="12" fill="#ddd"/>
                  <rect x="50" y="60" width="140" height="4" fill="#666"/>
                  <rect x="50" y="70" width="140" height="4" fill="#666"/>
                  <rect x="50" y="80" width="100" height="4" fill="#888"/>
                  {/* Cards preview inside website */}
                  <rect x="50" y="94" width="60" height="36" fill="#f4f4f4" rx="2"/>
                  <rect x="130" y="94" width="60" height="36" fill="#f4f4f4" rx="2"/>
                </svg>
              </div>
              <div className="polaroid-caption">
                <span className="caption-text font-handwriting">digital experience</span>
              </div>
            </div>
          </div>

          {/* Card 2: campaign design */}
          <div className="polaroid-item p-item-2">
            <div className="polaroid-card">
              <div className="polaroid-image-container">
                {/* Posters on bench vector */}
                <svg viewBox="0 0 240 180" className="vector-art">
                  <rect width="100%" height="100%" fill="#fbf8f3"/>
                  {/* Poster 1 */}
                  <rect x="40" y="20" width="65" height="100" fill="#fff" stroke="#ddd" strokeWidth="1"/>
                  <rect x="46" y="26" width="53" height="50" fill="#e05e3a"/>
                  <circle cx="72" cy="51" r="14" fill="#fff" opacity="0.3"/>
                  {/* Poster 2 */}
                  <rect x="125" y="20" width="65" height="100" fill="#fff" stroke="#ddd" strokeWidth="1"/>
                  <rect x="131" y="26" width="53" height="50" fill="#6c8c7c"/>
                  {/* Studio table below */}
                  <rect x="20" y="140" width="200" height="12" fill="#d9d0c1"/>
                  <line x1="40" y1="152" x2="40" y2="180" stroke="#d9d0c1" strokeWidth="6"/>
                  <line x1="200" y1="152" x2="200" y2="180" stroke="#d9d0c1" strokeWidth="6"/>
                </svg>
              </div>
              <div className="polaroid-caption">
                <span className="caption-text font-handwriting">campaign design</span>
              </div>
            </div>
          </div>

          {/* Card 3: brand identity with orange J badge */}
          <div className="polaroid-item p-item-3">
            {/* Orange overlapping pixel logo badge */}
            <div className="floating-j-badge">J</div>
            <div className="polaroid-card">
              <div className="polaroid-image-container">
                {/* Product/jar mockup visual */}
                <svg viewBox="0 0 240 180" className="vector-art">
                  <rect width="100%" height="100%" fill="#ded7ce"/>
                  {/* Shadow */}
                  <ellipse cx="120" cy="142" rx="40" ry="8" fill="#c4bcb2"/>
                  {/* Jar container body */}
                  <rect x="90" y="50" width="60" height="90" rx="8" fill="#fff"/>
                  {/* Cap */}
                  <rect x="95" y="38" width="50" height="12" rx="2" fill="#583f2e"/>
                  {/* Jar Label */}
                  <rect x="90" y="70" width="60" height="50" fill="#efeadf"/>
                  <text x="50%" y="55%" textAnchor="middle" fill="#583f2e" fontFamily="monospace" fontSize="8" fontWeight="bold">AMIE</text>
                  <text x="50%" y="64%" textAnchor="middle" fill="#ff5500" fontFamily="sans-serif" fontSize="6">PEANUT BUTTER</text>
                </svg>
              </div>
              <div className="polaroid-caption">
                <span className="caption-text font-handwriting">brand identity</span>
              </div>
            </div>
          </div>

          {/* Card 4: interface design */}
          <div className="polaroid-item p-item-4">
            <div className="polaroid-card">
              <div className="polaroid-image-container">
                {/* Hand holding green UI smartphone vector */}
                <svg viewBox="0 0 240 180" className="vector-art">
                  <rect width="100%" height="100%" fill="#e8eae9"/>
                  {/* Smartphone */}
                  <rect x="80" y="20" width="80" height="145" rx="10" fill="#121212"/>
                  <rect x="85" y="25" width="70" height="135" rx="6" fill="#00ff66"/>
                  {/* UI contents */}
                  <circle cx="120" cy="55" r="16" fill="#00e05b"/>
                  <rect x="95" y="85" width="50" height="8" fill="#fff" rx="1"/>
                  <rect x="95" y="100" width="50" height="4" fill="#00d154"/>
                  <rect x="95" y="108" width="40" height="4" fill="#00d154"/>
                  {/* Interactive shapes inside smartphone screen */}
                  <rect x="95" y="122" width="50" height="24" fill="#fff" rx="2"/>
                </svg>
              </div>
              <div className="polaroid-caption">
                <span className="caption-text font-handwriting">interface design</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
