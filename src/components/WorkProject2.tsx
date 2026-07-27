import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './WorkProject2.css';
import project2Hero from '../assets/project2_hero.png';
import project2Case from '../assets/project2_case.png';

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
        <img src={project2Hero} alt="Project 02 - Hero" className="project2-hero-image" />
      </div>

      <div className="work-project2-content">
        <div className="project2-nav-bar">
          <button onClick={handleBack} className="project2-back-btn">
            <ArrowLeft size={16} />
            <span>BACK TO CREATIONS</span>
          </button>
        </div>

        {/* Case Study Image Showcase */}
        <div className="project2-section-wrapper">
          <img src={project2Case} alt="Project 02 Case Study Details" className="project2-case-image" />
        </div>
      </div>
    </div>
  );
};
