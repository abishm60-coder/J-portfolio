import React from 'react';
import './ContactFooter.css';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="contact-footer">
      <div className="footer-container">
        
        <div className="footer-main-layout">
          <div className="footer-left-content">
            <h2 className="headline-text-large">
              LET'S
              <br />
              CREATE
              <br />
              SOMETHING
              <br />
              <span className="highlight-orange">MEANINGFUL</span>
            </h2>
            <p className="footer-paragraph-sub">
              whether it's a product, brand or a visual story, i'm always open to meaningful collaborations and creative conversations.
            </p>
          </div>

          {/* Say Hello handwriting annotation pointer */}
          <div className="say-hello-connector-column">
            <a href="mailto:JERFINJEROLD29@GMAIL.COM" className="say-hello-wrapper" title="Say hello via Email">
              <svg className="connector-arrow-curved" viewBox="0 0 100 50" width="100" height="50">
                <path d="M 15,45 Q 50,8 90,20" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M 78,12 L 90,20 L 78,28" fill="none" stroke="var(--orange-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="say-hello-handwriting">say hello!</span>
            </a>
          </div>

          <div className="footer-right-channels">
            <div className="channel-box">
              <span className="channel-bullet">■</span>
              <div className="channel-text-group">
                <span className="channel-title">EMAIL</span>
                <a href="mailto:JERFINJEROLD29@GMAIL.COM" className="channel-value">JERFINJEROLD29@GMAIL.COM</a>
              </div>
            </div>

            <div className="channel-box">
              <span className="channel-bullet">■</span>
              <div className="channel-text-group">
                <span className="channel-title">LINKDIN</span>
                <a href="https://linkedin.com/in/jerfin" target="_blank" rel="noreferrer" className="channel-value">LINKDIN.COM/IN/JERFIN</a>
              </div>
            </div>

            <div className="channel-box">
              <span className="channel-bullet">■</span>
              <div className="channel-text-group">
                <span className="channel-title">RESUME</span>
                <a href="#resume" className="channel-value uppercase-link">WE RESUME</a>
              </div>
            </div>

            <div className="channel-box">
              <span className="channel-bullet">■</span>
              <div className="channel-text-group">
                <span className="channel-title">INSTAGRAM</span>
                <a href="https://instagram.com/by.jeri" target="_blank" rel="noreferrer" className="channel-value">@BY.JERI</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="bottom-bar-logo">
            <div className="orange-square-logo">J</div>
            <span className="bottom-copyright-text">@2026 JERFIN.DESIGN</span>
          </div>

          <div className="bottom-status-indicator">
            <span className="green-active-dot"></span>
            <span className="status-indicator-text">AVAILABLE FOR PROJECTS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
