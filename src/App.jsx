import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Value } from './components/Value';
import { Platform } from './components/Platform';
import { Sensors } from './components/Sensors';
import { UseCases } from './components/UseCases';
import { Pricing } from './components/Pricing';
import { GetStarted } from './components/GetStarted';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

const SECTION_IDS = ['hero', 'value', 'platform', 'sensors', 'use-cases', 'pricing', 'get-started'];

function App() {
  const activeId = useScrollSpy(SECTION_IDS);
  useScrollReveal();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="app">
      <Navbar
        activeId={activeId}
        isOpen={navOpen}
        onToggle={setNavOpen}
        onNavigate={() => setNavOpen(false)}
      />
      <div className="main-content">
        <Hero />
        <Value />
        <Platform />
        <Sensors />
        <UseCases />
        <Pricing />
        <GetStarted />
      </div>
    </main>
  );
}

export default App;
