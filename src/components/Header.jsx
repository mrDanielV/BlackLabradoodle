import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';

import { navItems } from '../data/navItems';

import { MenuM } from './MenuM';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo} aria-label="Home">
        { /*<svg
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
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
        </svg> */ }
          <div className={styles.homelogo}></div>
      </NavLink>

      <button type="button" className={`${styles.menuMobile} ${styles.logo}`}
        onClick={() => setIsOpen((v) => !v)}>
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
          <NavLink key={to} to={to} end={end} className={
              //({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link
              ({ isActive }) => isActive ? styles.link + ' ' + styles.active : styles.link
            }>
            {label}
          </NavLink>
        ))}
      </nav>

      

      
    </header>
  );
}
