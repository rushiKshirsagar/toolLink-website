import { useEffect } from 'react';

/**
 * Observes [data-section] elements and toggles section--in-view when they
 * enter or leave the viewport, enabling slide-up on scroll down and
 * slide-down when scrolling up (section leaves view).
 */
export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    const rows = document.querySelectorAll('[data-reveal-row]');
    const observed = [...sections, ...rows];
    if (!observed.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--in-view');
          } else {
            entry.target.classList.remove('section--in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observed.forEach((el) => observer.observe(el));
    return () => observed.forEach((el) => observer.unobserve(el));
  }, []);
}
