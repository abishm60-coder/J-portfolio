import React from 'react';
import './Header.css';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="site-logo-left">
          jerfin.design
        </div>
        
        <div className="site-logo-center" onClick={() => handleNavClick('home')}>
          <div className="orange-logo-box">J</div>
        </div>

        <nav className="header-nav">
          <button onClick={() => handleNavClick('work')} className="nav-link">work</button>
          <button onClick={() => handleNavClick('about')} className="nav-link">journey</button>
          <button onClick={() => handleNavClick('playground')} className="nav-link">playground</button>
          <button onClick={() => handleNavClick('contact')} className="nav-link">contact</button>
        </nav>
      </div>
    </header>
  );
};
