import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedCreations } from './components/SelectedCreations';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { CreativePlayground } from './components/CreativePlayground';
import { ContactFooter } from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <SelectedCreations />
        <About />
        <Expertise />
        <CreativePlayground />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
