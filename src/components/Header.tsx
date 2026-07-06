import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="site-logo-left">
          jerfin.design
        </div>
        
        <div className="site-logo-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="orange-logo-box">J</div>
        </div>

        <nav className="header-nav">
          <button onClick={() => scrollToSection('work')} className="nav-link">work</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">journey</button>
          <button onClick={() => scrollToSection('playground')} className="nav-link">playground</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">contact</button>
        </nav>
      </div>
    </header>
  );
};
