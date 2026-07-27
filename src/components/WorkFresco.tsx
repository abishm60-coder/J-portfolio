import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './WorkFresco.css';

// Import the Fresco Laundry case study images
import fresco1 from '../assets/fresco_1.png';
import fresco2 from '../assets/fresco_2.png';
import fresco3 from '../assets/fresco_3.png';
import fresco4 from '../assets/fresco_4.png';
import fresco5 from '../assets/fresco_5.png';
import fresco6 from '../assets/fresco_6.png';
import fresco7 from '../assets/fresco_7.png';
import fresco8 from '../assets/fresco_8.png';
import fresco9 from '../assets/fresco_9.png';
import fresco10 from '../assets/fresco_10.png';
import fresco11 from '../assets/fresco_11.png';
import fresco12 from '../assets/fresco_12.png';

interface WorkFrescoProps {
  onBack?: () => void;
}

export const WorkFresco: React.FC<WorkFrescoProps> = ({ onBack }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#/work';
    }
  };

  return (
    <div className="work-fresco-container">
      {/* Edge-to-edge Hero Banner */}
      <div className="fresco-hero-fullwidth">
        <img src={fresco1} alt="Fresco Laundry Case Study - Hero" className="fresco-hero-image" />
      </div>

      <div className="work-fresco-content">
        <div className="fresco-nav-bar">
          <button onClick={handleBack} className="fresco-back-btn">
            <ArrowLeft size={16} />
            <span>BACK TO CREATIONS</span>
          </button>
        </div>

        {/* Native Vector HTML Overview Card */}
        <div className="fresco-overview-html-card">
          <div className="fresco-card-header-row">
            <div className="fresco-card-title-group">
              <h1 className="fresco-main-title">FRESCO LAUNDRY</h1>
              <p className="fresco-tagline">
                designed to transform a complex booking journey into a simple, trustworthy experience.
              </p>
            </div>
            <div className="fresco-meta-group">
              <div className="fresco-meta-item">
                <span className="fresco-meta-label">Industry</span>
                <span className="fresco-meta-value">laundry</span>
              </div>
              <div className="fresco-meta-item">
                <span className="fresco-meta-label">Year</span>
                <span className="fresco-meta-value">2026</span>
              </div>
              <div className="fresco-meta-item">
                <span className="fresco-meta-label">Duration</span>
                <span className="fresco-meta-value">1 month</span>
              </div>
            </div>
          </div>

          <div className="fresco-card-divider" />

          {/* Overview */}
          <div className="fresco-card-section-row">
            <div className="fresco-section-left">
              <h3 className="fresco-section-title">Overview</h3>
            </div>
            <div className="fresco-section-right">
              <p className="fresco-body-text">
                fresco laundry is a responsive booking platform built for a canadian laundry service. the project focused on reducing booking friction, improving service discovery through postal code validation, and building customer trust with a clear, brand-led digital experience.
              </p>
              <p className="fresco-body-text">
                the challenge was to create a trustworthy and intuitive platform that simplified booking, highlighted the brand's unique value, and encouraged more users to complete their orders.
              </p>
            </div>
          </div>

          {/* My Role */}
          <div className="fresco-card-section-row">
            <div className="fresco-section-left">
              <h3 className="fresco-section-title">My Role</h3>
            </div>
            <div className="fresco-section-right">
              <p className="fresco-body-text">
                ux research • ui design • prototype • responsive design
              </p>
            </div>
          </div>

          {/* Executed */}
          <div className="fresco-card-section-row">
            <div className="fresco-section-left">
              <h3 className="fresco-section-title">Executed</h3>
            </div>
            <div className="fresco-section-right">
              <ul className="fresco-executed-list">
                <li>ux research</li>
                <li>competitor analysis</li>
                <li>heuristic evaluation</li>
                <li>user flow</li>
                <li>mid-fidelity wireframes</li>
                <li>ui design</li>
                <li>interactive prototype</li>
                <li>responsive design</li>
                <li>developer handoff</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco3} alt="Problem Statement" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco4} alt="Research" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco5} alt="Design Process" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco6} alt="How I Solved It: Simplified Service Discovery" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco7} alt="Guided Booking Experience" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco8} alt="Building Trust Through Design" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco9} alt="Final Design & Developer Handoff" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco10} alt="Responsive Across All Devices" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco11} alt="Reflection" className="fresco-case-image" />
        </div>
        <div className="fresco-section-wrapper">
          <img src={fresco12} alt="More Projects" className="fresco-case-image" />
        </div>
      </div>
    </div>
  );
};
