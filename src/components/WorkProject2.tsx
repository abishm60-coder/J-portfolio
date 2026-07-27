import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './WorkProject2.css';
import project2Hero from '../assets/project2_hero.png';
import p2_1 from '../assets/p2_1.png';
import p2_2 from '../assets/p2_2.png';
import p2_3 from '../assets/p2_3.png';
import p2_4 from '../assets/p2_4.png';

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
        <img src={project2Hero} alt="Journeys Cloud Platform - Hero" className="project2-hero-image" />
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
              <h1 className="project2-main-title">JOURNEYS SCENERY</h1>
              <p className="project2-tagline">
                designed to transform complex cloud infrastructure scaling into a simple, intuitive experience.
              </p>
            </div>
            <div className="project2-meta-group">
              <div className="project2-meta-item">
                <span className="project2-meta-label">Industry</span>
                <span className="project2-meta-value">cloud saas</span>
              </div>
              <div className="project2-meta-item">
                <span className="project2-meta-label">Year</span>
                <span className="project2-meta-value">2026</span>
              </div>
              <div className="project2-meta-item">
                <span className="project2-meta-label">Duration</span>
                <span className="project2-meta-value">2 months</span>
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
                journeys scenery is a responsive cloud management platform built to help engineering teams monitor, scale, and optimize their infrastructure seamlessly. the project focused on reducing scaling friction, improving service discovery, and building trust with a clear, brand-led digital experience.
              </p>
              <p className="project2-body-text">
                the challenge was to create a trustworthy and intuitive platform that simplified infrastructure monitoring, highlighted key performance metrics, and empowered teams to scale effortlessly.
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
                ux research • ui design • system architecture • responsive design
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
                <li>heuristic evaluation</li>
                <li>user flow & architecture</li>
                <li>mid-fidelity wireframes</li>
                <li>ui design & component system</li>
                <li>interactive prototype</li>
                <li>responsive design</li>
                <li>developer handoff</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Case Study Section Wrappers */}
        <div className="project2-section-wrapper">
          <img src={p2_1} alt="Problem Statement & Research" className="project2-case-image" />
        </div>
        <div className="project2-section-wrapper">
          <img src={p2_2} alt="Design Process & Solution Flow" className="project2-case-image" />
        </div>
        <div className="project2-section-wrapper">
          <img src={p2_3} alt="System Architecture & Dashboard" className="project2-case-image" />
        </div>
        <div className="project2-section-wrapper">
          <img src={p2_4} alt="Responsive Mobile Showcase" className="project2-case-image" />
        </div>
      </div>
    </div>
  );
};
