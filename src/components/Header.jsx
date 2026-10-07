import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

import { navItems } from '../data/navItems';
import { MenuM } from './MenuM';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <NavLink to="/" className={styles.logo} aria-label="Home">
        <div className={styles.homelogo}></div>
      </NavLink>

      <button
        type="button"
        className={`${styles.menuMobile} ${styles.logo}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Открыть меню"
        aria-expanded={isOpen}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <MenuM isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <nav className={styles.nav}>
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}