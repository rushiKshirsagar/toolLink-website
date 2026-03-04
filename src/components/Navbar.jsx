import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'hero', label: 'Overview' },
  { id: 'value', label: 'Why it matters' },
  { id: 'platform', label: 'Dashboard & alerts' },
  { id: 'sensors', label: 'Sensors' },
  { id: 'use-cases', label: 'Use cases' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'get-started', label: 'Get started' },
];

const SCROLL_THRESHOLD = 60;

export function Navbar({ activeId, onNavigate, isOpen, onToggle }) {
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onNavigate?.(id);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onToggle?.(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onToggle]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${isOpen ? 'navbar--open' : ''} ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__brand" onClick={(e) => { e.preventDefault(); handleClick('hero'); }}>
          <span className="navbar__brand-mark">Tool</span>
          <span className="navbar__brand-name">Link</span>
        </a>
        <nav className="navbar__nav">
          <ul className="navbar__list">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  className={`navbar__link ${activeId === id ? 'navbar__link--active' : ''}`}
                  onClick={() => handleClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#get-started" className="navbar__cta" onClick={(e) => { e.preventDefault(); handleClick('get-started'); }}>
          Get started
        </a>
        <button
          type="button"
          className="navbar__toggle"
          onClick={() => onToggle?.(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
