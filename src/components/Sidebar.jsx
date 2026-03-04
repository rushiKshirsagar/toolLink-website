import { useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Overview' },
  { id: 'value', label: 'Why it matters' },
  { id: 'product', label: 'Product' },
  { id: 'platform', label: 'Dashboard & alerts' },
  { id: 'sensors', label: 'Sensors' },
  { id: 'contact', label: 'Contact' },
];

export function Sidebar({ activeId, onNavigate, isOpen, onToggle }) {
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

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`} data-sidebar>
      <div className="sidebar__brand">
        <span className="sidebar__brand-mark">CNC</span>
        <span className="sidebar__brand-name">Monitor</span>
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={`sidebar__link ${activeId === id ? 'sidebar__link--active' : ''}`}
                onClick={() => handleClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className="sidebar__toggle"
        onClick={() => onToggle?.(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </aside>
  );
}
