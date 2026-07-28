import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './WorkFresco.css';

// Import the Fresco Laundry case study visual assets
import fresco1 from '../assets/fresco_1.png';
import fresco2 from '../assets/fresco_2.png';
import fresco3 from '../assets/fresco_3.png';
import fresco4 from '../assets/fresco_4.png';
import frescoResearchMethods from '../assets/fresco_research_methods.png';
import frescoDesignProcess from '../assets/fresco_design_process.png';
import frescoServiceDiscovery from '../assets/fresco_service_discovery.png';
import frescoGuidedBooking from '../assets/fresco_guided_booking.png';
import frescoBuildingTrust from '../assets/fresco_building_trust.png';
import frescoFinalDesign from '../assets/fresco_final_design.png';
import frescoResponsive from '../assets/fresco_responsive.png';
import fresco5 from '../assets/fresco_5.png';
import fresco6 from '../assets/fresco_6.png';
import fresco7 from '../assets/fresco_7.png';
import fresco8 from '../assets/fresco_8.png';
import fresco9 from '../assets/fresco_9.png';
import fresco10 from '../assets/fresco_10.png';
import fresco12 from '../assets/fresco_12.png';

interface WorkFrescoProps {
  onBack?: () => void;
}

export const WorkFresco: React.FC<WorkFrescoProps> = ({ onBack }) => {
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
    <div className="work-fresco-container">
      {/* Edge-to-edge Hero Banner */}
      <div className="fresco-hero-fullwidth">
        <img src={fresco1} alt="Fresco Laundry Case Study - Hero" className="fresco-hero-image" />
      </div>

      <div className="work-fresco-content">
        {/* Navigation Bar */}
        <div className="fresco-nav-bar">
          <button onClick={handleBack} className="fresco-back-btn">
            <ArrowLeft size={16} />
            <span>BACK TO CREATIONS</span>
          </button>
        </div>

        {/* SECTION 2: Overview (Native Vector HTML Content) */}
        <div className="fresco-html-section">
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

          {/* Overview Body */}
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

        <div className="fresco-section-divider" />

        {/* SECTION 3: Problem Statement (Native HTML Content + Separate Image Visual) */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <h2 className="fresco-section-heading">Problem Statement</h2>
            <div className="fresco-sub-header">
              <h4 className="fresco-sub-title">what needed to change</h4>
              <p className="fresco-sub-desc">
                the existing experience made it difficult for users to confidently book laundry services while limiting the business's ability to convert new customers.
              </p>
            </div>
          </div>
          <div className="fresco-image-container" style={{ marginTop: '20px' }}>
            <img src={fresco2} alt="Problem Statement - Customer & Business Challenges" className="fresco-case-image" />
          </div>
        </div>

        <div className="fresco-section-divider" />

        {/* SECTION 4: Research (Native HTML Content + Separate Image Visual) */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <h2 className="fresco-section-heading">Research</h2>
            <div className="fresco-sub-header">
              <h4 className="fresco-sub-title">what i discovered</h4>
              <p className="fresco-sub-desc">
                to better understand user behavior and business needs, i combined user research with market analysis to identify usability issues and opportunities for improvement.
              </p>
            </div>
          </div>
          <div className="fresco-image-container">
            <img src={frescoResearchMethods} alt="Research Methods & Findings" className="fresco-case-image" />
          </div>
        </div>

        <div className="fresco-section-divider" />

        {/* SECTION 5: Design Process (Native HTML Content + Separate Image Visual) */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <h2 className="fresco-section-heading">Design Process</h2>
            <div className="fresco-sub-header">
              <h4 className="fresco-sub-title">from insight to interface</h4>
              <p className="fresco-sub-desc">
                an iterative design process was followed to understand user needs, validate ideas, and deliver a responsive experience aligned with both business objectives and customer expectations.
              </p>
            </div>
          </div>
          <div className="fresco-image-container">
            <img src={frescoDesignProcess} alt="Design Process Timeline" className="fresco-case-image" />
          </div>
        </div>

        <div className="fresco-section-divider" />

        {/* SECTION 6: How I Solved It - 01 Simplified Service Discovery */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <h2 className="fresco-section-heading">How I Solved It</h2>
            <div className="fresco-sub-header">
              <h4 className="fresco-sub-title">01 simplified service discovery</h4>
              <p className="fresco-sub-desc">
                the booking experience begins with postal code validation, allowing users to instantly verify whether the service is available in their location. if unavailable, users can join a notification list and receive updates when the service expands to their area.
              </p>
            </div>
          </div>
          <div className="fresco-image-container">
            <img src={frescoServiceDiscovery} alt="Simplified Service Discovery Interface" className="fresco-case-image" />
          </div>
        </div>

        <div className="fresco-section-divider" />

        {/* SECTION 7: How I Solved It - 02 Guided Booking Experience */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <div className="fresco-sub-header">
              <h4 className="fresco-sub-title">02 guided booking experience</h4>
              <p className="fresco-sub-desc">
                instead of overwhelming users with multiple options, the booking journey progressively reveals plans and services step by step. this creates a simpler, more focused experience that reduces confusion and encourages completion.
              </p>
            </div>
          </div>
          <div className="fresco-image-container">
            <img src={frescoGuidedBooking} alt="Guided Booking Experience Interface" className="fresco-case-image" />
          </div>
        </div>

        <div className="fresco-section-divider" />

        {/* SECTION 8: How I Solved It - 03 Building Trust Through Design */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <div className="fresco-sub-header">
              <h4 className="fresco-sub-title">03 building trust through design</h4>
              <p className="fresco-sub-desc">
                the homepage was designed to establish credibility from the first interaction by combining authentic visuals, live customer reviews, transparent pricing, and a short process video that clearly explains how the service works.
              </p>
            </div>
          </div>
          <div className="fresco-image-container">
            <img src={frescoBuildingTrust} alt="Building Trust Through Design Interface" className="fresco-case-image" />
          </div>
        </div>

        <div className="fresco-section-divider" />

        {/* SECTION 9: Final Design & Developer Handoff */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <h2 className="fresco-section-heading">Final Design & Handoff</h2>
            <div className="fresco-sub-header">
              <h4 className="fresco-sub-title">from design system to production</h4>
              <p className="fresco-sub-desc">
                a structured design system was created in figma, including color tokens, typography scales, interactive components, and responsive grid layouts to ensure a smooth handoff for development.
              </p>
            </div>
          </div>
          <div className="fresco-image-container">
            <img src={frescoFinalDesign} alt="Final Design System & Component Handoff" className="fresco-case-image" />
          </div>
        </div>

        <div className="fresco-section-divider" />

        {/* SECTION 10: Responsive Across All Devices */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <h2 className="fresco-section-heading">Responsive Across All Devices</h2>
            <div className="fresco-sub-header">
              <h4 className="fresco-sub-title">optimized for every screen</h4>
              <p className="fresco-sub-desc">
                the platform was designed to work seamlessly across desktop and mobile. all key flows including postal code validation, plan selection, and booking were carefully optimized for each screen size.
              </p>
            </div>
          </div>
          <div className="fresco-image-container">
            <img src={frescoResponsive} alt="Responsive Across Desktop and Mobile Devices" className="fresco-case-image" />
          </div>
        </div>

        <div className="fresco-section-divider" />

        {/* SECTION 11: Reflection (Native Vector HTML Content) */}
        <div className="fresco-html-section">
          <div className="fresco-section-header">
            <h2 className="fresco-section-heading">Reflection</h2>
            <h4 className="fresco-sub-title">what did i learn?</h4>
          </div>

          <div className="fresco-reflection-grid">
            <div className="fresco-reflection-card">
              <h5 className="fresco-reflection-card-title">balancing business goals with user needs</h5>
              <p className="fresco-body-text">
                every design decision focused on reducing friction while supporting the company's business objectives. rather than redesigning the interface alone, the goal was to create a booking experience that felt simple, trustworthy, and encouraged more users to complete their orders.
              </p>
            </div>
            <div className="fresco-reflection-card">
              <h5 className="fresco-reflection-card-title">trust is the foundation of service experiences</h5>
              <p className="fresco-body-text">
                laundry services require customers to hand over their personal belongings, making trust a critical part of the experience. by using authentic imagery, transparent pricing, customer reviews, and a clear service journey, the platform built confidence before users even started the booking process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '1300px', padding: '0 40px', margin: '0 auto', boxSizing: 'border-box' }}>
        <div className="fresco-section-divider" style={{ margin: '50px 0 30px 0' }} />

        {/* SECTION 12: More Projects */}
        <div className="fresco-html-section" style={{ paddingBottom: '60px' }}>
          <div className="fresco-section-header">
            <h2 className="fresco-section-heading">More Projects</h2>
          </div>
          <div className="fresco-image-container">
            <img src={fresco12} alt="Explore More Projects" className="fresco-case-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
