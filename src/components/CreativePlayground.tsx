import React from 'react';
import './CreativePlayground.css';
import letterformsImg from '../assets/letterforms.png';
import photographyImg from '../assets/photography.png';
import journeysImg from '../assets/journeys.png';
import portraitsImg from '../assets/portraits.png';
import curiosityImg from '../assets/curiosity.png';
import natureImg from '../assets/nature.png';

export const CreativePlayground: React.FC = () => {
  return (
    <section id="playground" className="playground-section">
      <div className="playground-container">
        
        <div className="playground-header-center">
          <h2 className="playground-title-main">CREATIVE PLAYGROUND</h2>
        </div>

        {/* 2x3 Grid with handwriting annotations and SVG arrows exactly as mockup */}
        <div className="playground-2x3-wrapper">
          
          {/* Card 1: letterforms */}
          <div className="grid-cell item-letterforms">
            <div className="custom-annotation-container label-letterforms">
              <span className="annotation-text">letterforms</span>
              <svg className="annotation-arrow" viewBox="0 0 60 40">
                <path d="M 10,10 Q 35,10 45,30" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 38,26 L 45,30 L 48,22" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cell-visual-container">
              <img src={letterformsImg} alt="Letterforms" className="playground-img" />
            </div>
          </div>

          {/* Card 2: photography */}
          <div className="grid-cell item-photography">
            <div className="custom-annotation-container label-photography">
              <span className="annotation-text">photography</span>
              <svg className="annotation-arrow" viewBox="0 0 40 50">
                <path d="M 20,5 Q 35,25 20,42" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 14,35 L 20,42 L 26,36" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cell-visual-container">
              <img src={photographyImg} alt="Photography" className="playground-img" />
            </div>
          </div>

          {/* Card 3: journeys */}
          <div className="grid-cell item-journeys">
            <div className="custom-annotation-container label-journeys">
              <span className="annotation-text">journeys</span>
              <svg className="annotation-arrow" viewBox="0 0 60 50">
                <path d="M 50,5 Q 15,10 20,40" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 14,33 L 20,40 L 27,34" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cell-visual-container">
              <img src={journeysImg} alt="Journeys" className="playground-img" />
            </div>
          </div>

          {/* Card 4: portraits */}
          <div className="grid-cell item-portraits">
            <div className="custom-annotation-container label-portraits">
              <span className="annotation-text">portraits</span>
              <svg className="annotation-arrow" viewBox="0 0 60 50">
                <path d="M 10,40 Q 45,40 50,15" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 44,22 L 50,15 L 54,23" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cell-visual-container">
              <img src={portraitsImg} alt="Portraits" className="playground-img" />
            </div>
          </div>

          {/* Card 5: curiosity */}
          <div className="grid-cell item-curiosity">
            <div className="custom-annotation-container label-curiosity">
              <svg className="annotation-arrow" viewBox="0 0 40 50">
                <path d="M 20,45 Q 5,25 20,8" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 14,14 L 20,8 L 26,15" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="annotation-text">curiosity</span>
            </div>
            <div className="cell-visual-container">
              <img src={curiosityImg} alt="Curiosity" className="playground-img" />
            </div>
          </div>

          {/* Card 6: nature */}
          <div className="grid-cell item-nature">
            <div className="custom-annotation-container label-nature">
              <span className="annotation-text">nature</span>
              <svg className="annotation-arrow" viewBox="0 0 60 40">
                <path d="M 50,10 Q 20,10 15,30" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 22,24 L 15,30 L 12,22" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cell-visual-container">
              <img src={natureImg} alt="Nature" className="playground-img" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
