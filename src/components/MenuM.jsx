import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuM.module.css';

import { navItems } from '../data/navItems';

export function MenuM({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      )}

        <div className={`${styles.menuCnt} ${isOpen ? styles.open : ''}`}>
          <div className={styles.close} onClick={onClose}>
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
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </div>
          
          <br />

          <div className={styles.listCnt}>
            {navItems.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={styles.linkM} onClick={onClose}>{label}</NavLink>
            ))}
          </div>
        </div>
    </>
  );
}
