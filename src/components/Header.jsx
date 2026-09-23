import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const navItems = [
  { to: '/', label: 'Главная', end: true },
  { to: '/members', label: 'Состав' },
  { to: '/music', label: 'Музыка' },
  { to: '/contacts', label: 'Контакты' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo} aria-label="На главную">
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
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
        </svg>
      </NavLink>

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
