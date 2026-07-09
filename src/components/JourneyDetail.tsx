import React, { useEffect, useRef, useState } from 'react';
import './JourneyDetail.css';
import sketchingImg from '../assets/sketching.png';

interface JourneyDetailProps {
  onBack?: () => void;
}

interface ScrollRevealTextProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text, icon, className }) => {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Highlights the text as it enters the middle-upper part of the screen
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.45;
      
      const totalRange = start - end;
      const currentPos = start - rect.top;
      
      let progress = currentPos / totalRange;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const characters = Array.from(text);
  const totalSteps = characters.length + (icon ? 3 : 0); // Give the icon a slightly longer transition threshold

  return (
    <h2 className={className} ref={elementRef}>
      {characters.map((char, index) => {
        const startThreshold = index / totalSteps;
        const endThreshold = (index + 1) / totalSteps;
        
        let charWeight = (scrollProgress - startThreshold) / (endThreshold - startThreshold);
        charWeight = Math.max(0, Math.min(1, charWeight));
        
        // Interpolate color from dark grey (#383838) to white (#ffffff)
        const greyStart = 56;
        const colorVal = Math.round(greyStart + (255 - greyStart) * charWeight);
        
        return (
          <span 
            key={index} 
            style={{ 
              color: `rgb(${colorVal}, ${colorVal}, ${colorVal})`,
              transition: 'color 0.05s ease-out'
            }}
          >
            {char}
          </span>
        );
      })}

      {icon && (() => {
        const iconStart = characters.length / totalSteps;
        const iconWeight = Math.max(0, Math.min(1, (scrollProgress - iconStart) / (1 - iconStart)));
        
        return (
          <span 
            style={{ 
              opacity: 0.22 + 0.78 * iconWeight,
              filter: `grayscale(${100 - iconWeight * 100}%)`,
              transition: 'opacity 0.15s ease-out, filter 0.15s ease-out',
              display: 'inline-block'
            }}
          >
            {icon}
          </span>
        );
      })()}
    </h2>
  );
};

export const JourneyDetail: React.FC<JourneyDetailProps> = ({ onBack }) => {
  // Scroll to top when page is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="journey-detail-page">
      <div className="journey-detail-container">
        
        {/* Header Branding elements matching the mockup top row */}
        <div className="journey-detail-top-row">
          <div className="journey-logo-text-group">
            <h1 className="journey-brand-name">JERFIN JEROLD</h1>
            <p className="journey-brand-subtext">designing products that people love to use.</p>
          </div>
          
          <div className="journey-sticker-wrapper">
            <div className="journey-pixel-j-circle">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <circle cx="50" cy="50" r="44" fill="#ff5500" />
                <path 
                  d="M 40,32 H 68 V 40 H 60 V 64 H 44 V 56 H 52 V 40 H 40 Z" 
                  fill="#000000" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Large Silhouette visual frame */}
        <div className="journey-hero-image-wrapper">
          <img 
            src={sketchingImg} 
            alt="Jerfin Jerold Silhouette" 
            className="journey-hero-image" 
          />
        </div>

        {/* Small intro paragraph aligned to the right below the visual */}
        <div className="journey-intro-paragraph-row">
          <p className="journey-intro-text">
            creative product designer working across startups, freelance projects, and personal ventures. i combine research, strategy, branding, and ui/ux to design products that are intuitive, scalable, and built for real users.
          </p>
        </div>

        {/* Core philosophy text stack with character-by-character scroll reveal */}
        <div className="journey-philosophy-content">
          <div className="philosophy-item">
            <ScrollRevealText 
              text="design is where curiosity meets purpose. "
              icon={<span className="philosophy-icon">✦</span>}
              className="philosophy-statement"
            />
          </div>

          <div className="philosophy-item">
            <ScrollRevealText 
              text="it's not just about creating beautiful interfaces, it's about solving problems that matter. "
              icon={<span className="philosophy-icon-box">▢</span>}
              className="philosophy-statement"
            />
          </div>

          <div className="philosophy-item">
            <ScrollRevealText 
              text="every project begins with understanding people, exploring ideas, and designing experiences that feel intuitive and meaningful. "
              icon={<span className="philosophy-icon-box">◎</span>}
              className="philosophy-statement"
            />
          </div>

          <div className="philosophy-item">
            <ScrollRevealText 
              text="i'm constantly learning, refining my craft, and turning every challenge into an opportunity to create better products. "
              icon={<span className="philosophy-icon-arrow">↗</span>}
              className="philosophy-statement"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
