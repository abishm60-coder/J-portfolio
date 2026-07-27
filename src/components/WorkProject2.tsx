import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './WorkProject2.css';
import project2Hero from '../assets/project2_hero.png';
import sec1 from '../assets/project2_sec1.png';
import sec2 from '../assets/project2_sec2.png';
import sec3 from '../assets/project2_sec3.png';
import sec4 from '../assets/project2_sec4.png';

interface WorkProject2Props {
  onBack?: () => void;
}

export const WorkProject2: React.FC<WorkProject2Props> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#/work';
    }
  };

  return (
    <div className="work-project2-container">
      {/* Edge-to-edge Hero Banner */}
      <div className="project2-hero-fullwidth">
        <img src={project2Hero} alt="Expert Marketplace - Hero" className="project2-hero-image" />
      </div>

      <div className="work-project2-content">
        <div className="project2-nav-bar">
          <button onClick={handleBack} className="project2-back-btn">
            <ArrowLeft size={16} />
            <span>BACK TO CREATIONS</span>
          </button>
        </div>

        {/* Native Vector HTML Overview Card */}
        <div className="project2-overview-html-card">
          <div className="project2-card-header-row">
            <div className="project2-card-title-group">
              <h1 className="project2-main-title">EXPERT MARKETPLACE</h1>
              <p className="project2-tagline">
                turning business challenges into expert-led solutions through a structured collaboration marketplace.
              </p>
            </div>
            <div className="project2-meta-group">
              <div className="project2-meta-item">
                <span className="project2-meta-label">Industry</span>
                <span className="project2-meta-value">b2b saas</span>
              </div>
              <div className="project2-meta-item">
                <span className="project2-meta-label">Year</span>
                <span className="project2-meta-value">2025</span>
              </div>
              <div className="project2-meta-item">
                <span className="project2-meta-label">Duration</span>
                <span className="project2-meta-value">6 month</span>
              </div>
            </div>
          </div>

          <div className="project2-card-divider" />

          {/* Overview */}
          <div className="project2-card-section-row">
            <div className="project2-section-left">
              <h3 className="project2-section-title">Overview</h3>
            </div>
            <div className="project2-section-right">
              <p className="project2-body-text">
                i designed a b2b expert marketplace that helps businesses connect with industry professionals to solve real operational challenges.
              </p>
              <p className="project2-body-text">
                instead of immediately purchasing a complete consulting solution, businesses can post a challenge, receive short solution previews from multiple experts, evaluate their credibility, unlock the most relevant solution, and collaborate through structured tasks until the challenge is resolved.
              </p>
              <p className="project2-body-text">
                the product needed to balance three things: finding the right expertise, building enough trust to pay for a solution, and keeping the entire collaboration inside the platform.
              </p>
            </div>
          </div>

          {/* My Role */}
          <div className="project2-card-section-row">
            <div className="project2-section-left">
              <h3 className="project2-section-title">My Role</h3>
            </div>
            <div className="project2-section-right">
              <p className="project2-body-text">
                ux research • product design • user flows • wireframing • ui design • prototyping • responsive design
              </p>
            </div>
          </div>

          {/* Executed */}
          <div className="project2-card-section-row">
            <div className="project2-section-left">
              <h3 className="project2-section-title">Executed</h3>
            </div>
            <div className="project2-section-right">
              <ul className="project2-executed-list">
                <li>ux research</li>
                <li>competitor analysis</li>
                <li>problem framing</li>
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

        {/* Case Study Section Wrappers */}
        <div className="project2-section-wrapper">
          <img src={sec1} alt="Problem Statement & Choosing the Right Expert" className="project2-case-image" />
        </div>
        <div className="project2-section-wrapper">
          <img src={sec2} alt="Moving from Advice to Action" className="project2-case-image" />
        </div>
        <div className="project2-section-wrapper">
          <img src={sec3} alt="Building Trust & Collaboration" className="project2-case-image" />
        </div>
        <div className="project2-section-wrapper">
          <img src={sec4} alt="Research & Discovery" className="project2-case-image" />
        </div>
      </div>
    </div>
  );
};
