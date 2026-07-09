import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedCreations } from './components/SelectedCreations';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { CreativePlayground } from './components/CreativePlayground';
import { ContactFooter } from './components/ContactFooter';
import { ProjectDetail } from './components/ProjectDetail';
import { JourneyDetail } from './components/JourneyDetail';
import { PlaygroundDetail } from './components/PlaygroundDetail';

type Route = 
  | { type: 'home' }
  | { type: 'work' }
  | { type: 'about' }
  | { type: 'playground' }
  | { type: 'project'; id: string };

const App: React.FC = () => {
  const [route, setRoute] = useState<Route>({ type: 'home' });

  // Sync hash routing to support browser navigation, deep linking, and bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '');
        setRoute({ type: 'project', id });
      } else if (hash === '#/work') {
        setRoute({ type: 'work' });
        window.scrollTo(0, 0);
      } else if (hash === '#/about') {
        setRoute({ type: 'about' });
        window.scrollTo(0, 0);
      } else if (hash === '#/playground') {
        setRoute({ type: 'playground' });
        window.scrollTo(0, 0);
      } else {
        setRoute({ type: 'home' });
      }
    };

    // Initial check on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const selectProject = (id: string) => {
    window.location.hash = `#/project/${id}`;
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#/';
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'work') {
      window.location.hash = '#/work';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'about') {
      window.location.hash = '#/about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'playground') {
      window.location.hash = '#/playground';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.location.hash = '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we are not on home, go home first, then scroll
      if (window.location.hash !== '#/' && window.location.hash !== '') {
        window.location.hash = '#/';
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="app-shell">
      <Header onNavigate={handleNavigation} />
      <main style={{ minHeight: '80vh' }}>
        {route.type === 'project' && (
          <ProjectDetail projectId={route.id} onBack={goBack} />
        )}
        
        {route.type === 'work' && (
          <SelectedCreations variant="work" onProjectSelect={selectProject} />
        )}
        
        {route.type === 'about' && (
          <JourneyDetail onBack={goBack} />
        )}

        {route.type === 'playground' && (
          <PlaygroundDetail />
        )}
        
        {route.type === 'home' && (
          <>
            <Hero />
            <SelectedCreations variant="home" onProjectSelect={selectProject} />
            <About />
            <Expertise />
            <CreativePlayground />
          </>
        )}
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
