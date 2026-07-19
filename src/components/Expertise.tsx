import React from 'react';
import './Expertise.css';
import productDesignHoverImg from '../assets/product_design_hover.png';
import brandingHoverImg from '../assets/branding_hover_transparent.png';
import visualDesignHoverImg from '../assets/visual_design_hover_transparent.png';

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-container">
        
        <div className="expertise-header-center">
          <h2 className="expertise-title-main">EXPERTISE</h2>
        </div>

        {/* Exactly 3 folders placed horizontally side-by-side */}
        <div className="folders-horizontal-grid">
          
          {/* Folder 1: product design */}
          <div className="horizontal-folder-card">
            <div className="folder-container-inner">
              
              {/* 1. Folder Back */}
              <div className="folder-back">
                <svg viewBox="0 0 346 270" className="folder-back-svg">
                  <path d="M 44 11 L 144 11 A 8 8 0 0 1 152 19 C 152 37 171 37 160 37 L 284 37 A 22 22 0 0 1 306 59 L 306 224 A 29 29 0 0 1 277 253 L 48 253 A 32 32 0 0 1 16 221 L 16 80 A 5 5 0 0 1 21 75 L 21 70 L 21 34 A 23 23 0 0 1 44 11 Z" />
                </svg>
              </div>

              {/* 2. Hover Content Cards (pop up on hover) */}
              <div className="folder-pop-contents">
                <img 
                  src={productDesignHoverImg} 
                  alt="Product Design Mockups" 
                  className="folder-pop-image" 
                />
              </div>

              {/* 3. Folder Front (SVG path matching the front body) */}
              <div className="folder-front">
                <svg viewBox="0 0 346 270" className="folder-front-svg">
                  <rect x="17" y="53" width="288" height="199" rx="27" ry="27" />
                </svg>
              </div>

            </div>
            <span className="folder-card-label">product design</span>
          </div>

          {/* Folder 2: branding */}
          <div className="horizontal-folder-card">
            <div className="folder-container-inner">
              
              {/* 1. Folder Back */}
              <div className="folder-back">
                <svg viewBox="0 0 346 270" className="folder-back-svg">
                  <path d="M 44 11 L 144 11 A 8 8 0 0 1 152 19 C 152 37 171 37 160 37 L 284 37 A 22 22 0 0 1 306 59 L 306 224 A 29 29 0 0 1 277 253 L 48 253 A 32 32 0 0 1 16 221 L 16 80 A 5 5 0 0 1 21 75 L 21 70 L 21 34 A 23 23 0 0 1 44 11 Z" />
                </svg>
              </div>

              {/* 2. Hover Content Cards */}
              <div className="folder-pop-contents">
                <img 
                  src={brandingHoverImg} 
                  alt="Branding Mockups" 
                  className="folder-pop-image" 
                />
              </div>

              {/* 3. Folder Front (SVG path matching the front body) */}
              <div className="folder-front">
                <svg viewBox="0 0 346 270" className="folder-front-svg">
                  <rect x="17" y="53" width="288" height="199" rx="27" ry="27" />
                </svg>
              </div>

            </div>
            <span className="folder-card-label">branding</span>
          </div>

          {/* Folder 3: visual design */}
          <div className="horizontal-folder-card">
            <div className="folder-container-inner">
              
              {/* 1. Folder Back */}
              <div className="folder-back">
                <svg viewBox="0 0 346 270" className="folder-back-svg">
                  <path d="M 44 11 L 144 11 A 8 8 0 0 1 152 19 C 152 37 171 37 160 37 L 284 37 A 22 22 0 0 1 306 59 L 306 224 A 29 29 0 0 1 277 253 L 48 253 A 32 32 0 0 1 16 221 L 16 80 A 5 5 0 0 1 21 75 L 21 70 L 21 34 A 23 23 0 0 1 44 11 Z" />
                </svg>
              </div>

              {/* 2. Hover Content Cards */}
              <div className="folder-pop-contents">
                <img 
                  src={visualDesignHoverImg} 
                  alt="Visual Design Mockups" 
                  className="folder-pop-image" 
                />
              </div>

              {/* 3. Folder Front (SVG path matching the front body) */}
              <div className="folder-front">
                <svg viewBox="0 0 346 270" className="folder-front-svg">
                  <rect x="17" y="53" width="288" height="199" rx="27" ry="27" />
                </svg>
              </div>

            </div>
            <span className="folder-card-label">visual design</span>
          </div>

        </div>

      </div>
    </section>
  );
};
