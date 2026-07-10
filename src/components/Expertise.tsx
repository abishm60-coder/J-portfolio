import React from 'react';
import './Expertise.css';

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
                
                {/* Left Card: Dashboard */}
                <div className="pop-card pop-card-left dashboard-mock">
                  <div className="dashboard-sidebar">
                    <div className="sidebar-logo">revenueX</div>
                    <div className="sidebar-menu">
                      <div className="menu-item active"></div>
                      <div className="menu-item"></div>
                      <div className="menu-item"></div>
                    </div>
                  </div>
                  <div className="dashboard-main">
                    <div className="dashboard-header">
                      <div className="search-bar"></div>
                    </div>
                    <div className="dashboard-body">
                      <div className="performance-box">
                        <span className="perf-title">Performance Overview</span>
                        <span className="perf-subtitle">Your sales, growth, and insights — all in one</span>
                        <div className="perf-chart">
                          <div className="bar" style={{ height: '35%' }}></div>
                          <div className="bar" style={{ height: '65%' }}></div>
                          <div className="bar" style={{ height: '50%' }}></div>
                          <div className="bar" style={{ height: '80%' }}></div>
                        </div>
                      </div>
                      <div className="explore-box">
                        <span className="explore-title">Explore your performance</span>
                        <div className="explore-btn"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Card: iPhone */}
                <div className="pop-card pop-card-center phone-mock">
                  <div className="phone-screen">
                    <div className="phone-island"></div>
                    <div className="phone-header">
                      <span className="phone-time">1:47</span>
                      <span className="phone-network">📶 🔋</span>
                    </div>
                    <div className="phone-scrollable-content">
                      <div className="phone-cashback">🛒 Cashback</div>
                      <div className="phone-balance">72 356 ₴</div>
                      <div className="phone-limits">
                        <span>₴ 22 356</span>
                        <span>₴ 50 000</span>
                      </div>
                      <div className="phone-card">
                        <div className="card-chip"></div>
                        <div className="card-logo">monobank</div>
                      </div>
                      <div className="phone-actions">
                        <div className="action-circle"></div>
                        <div className="action-circle"></div>
                        <div className="action-circle"></div>
                      </div>
                      <div className="phone-operations">
                        <div className="ops-header">Operations <span className="all-link">></span></div>
                        <div className="op-row">
                          <div className="op-avatar">👩</div>
                          <div className="op-info">
                            <span className="op-name">Mama</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card: Bauhaus Blueprint */}
                <div className="pop-card pop-card-right blueprint-mock">
                  <div className="blueprint-grid"></div>
                  <div className="blueprint-shapes">
                    <div className="b-shape circle"></div>
                    <div className="b-shape grid-paper"></div>
                    <div className="b-badge-round-hi">
                      <div className="badge-header">
                        <span className="shape red-tri"></span>
                        <span className="shape green-circle"></span>
                        <span className="shape orange-dots"></span>
                      </div>
                      <div className="badge-user">
                        <span className="avatar">👩‍🎨</span>
                        <span className="username">Astrid S.</span>
                      </div>
                      <div className="badge-title">BAUHAUS</div>
                      <div className="badge-action">Upload files</div>
                    </div>
                  </div>
                </div>

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
                
                {/* Left Card: Brand Guide Book */}
                <div className="pop-card pop-card-left brand-guide-mock">
                  <div className="guide-cover">
                    <div className="guide-title">GUIDELINES</div>
                    <div className="color-palette">
                      <span className="color-dot" style={{ backgroundColor: '#ff5500' }}></span>
                      <span className="color-dot" style={{ backgroundColor: '#121212' }}></span>
                      <span className="color-dot" style={{ backgroundColor: '#fcd5a5' }}></span>
                    </div>
                    <div className="guide-subtitle">v1.0 / 2026</div>
                  </div>
                </div>

                {/* Center Card: Logo Specimen */}
                <div className="pop-card pop-card-center logo-badge-mock">
                  <div className="badge-inner">
                    <div className="brand-logo-symbol">J</div>
                    <div className="brand-logo-text">JERFIN.DESIGN</div>
                    <div className="brand-badge-tag">ORIGINAL</div>
                  </div>
                </div>

                {/* Right Card: Stationery Mockup */}
                <div className="pop-card pop-card-right business-card-mock">
                  <div className="card-front">
                    <div className="card-logo">J</div>
                    <div className="card-info">
                      <span className="name">Jerfin Jerold</span>
                      <span className="role">Creative Director</span>
                    </div>
                  </div>
                </div>

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
                
                {/* Left Card: Typographic Poster */}
                <div className="pop-card pop-card-left poster-mock">
                  <div className="poster-grid-bg"></div>
                  <div className="poster-content">
                    <div className="poster-huge-text">SWIS</div>
                    <div className="poster-subtext">DESIGN LAB / 02</div>
                    <div className="poster-orange-block"></div>
                  </div>
                </div>

                {/* Center Card: Abstract Landscape Art */}
                <div className="pop-card pop-card-center graphic-canvas-mock">
                  <div className="canvas-frame">
                    <div className="canvas-gradient"></div>
                    <div className="canvas-overlay-shapes">
                      <div className="oval-shape"></div>
                    </div>
                  </div>
                </div>

                {/* Right Card: Layout Specimen */}
                <div className="pop-card pop-card-right typography-specimen-mock">
                  <div className="specimen-body">
                    <div className="specimen-title">Aa</div>
                    <div className="specimen-lines">
                      <div className="s-line"></div>
                      <div className="s-line"></div>
                      <div className="s-line"></div>
                    </div>
                  </div>
                </div>

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
