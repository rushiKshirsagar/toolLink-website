import { useState, useEffect, useRef } from 'react';

const HEADER_OFFSET = 120;

/**
 * Returns the id of the section currently in view based on scroll position.
 * @param {string[]} sectionIds - Array of section id strings in order
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');
  const raf = useRef(null);
  const lastIdRef = useRef(sectionIds[0] ?? '');

  useEffect(() => {
    function updateActive() {
      const scrollY = window.scrollY;
      let current = sectionIds[0] ?? '';

      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        const offsetTop = top + scrollY;
        const height = el.offsetHeight;
        if (scrollY >= offsetTop - HEADER_OFFSET && scrollY < offsetTop + height - 80) {
          current = sectionIds[i];
        }
      }

      const lastEl = document.getElementById(sectionIds[sectionIds.length - 1]);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (lastEl && scrollY >= maxScroll - 80) {
        current = sectionIds[sectionIds.length - 1];
      }

      if (current !== lastIdRef.current) {
        lastIdRef.current = current;
        setActiveId(current);
      }
    }

    function onScroll() {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        updateActive();
        raf.current = null;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActive();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return activeId;
}
