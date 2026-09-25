import { NavLink } from 'react-router-dom';
import styles from './Contacts.module.css';


export function Contacts() {
  return (
    <div>
      <h1 className="title">Contacts</h1>
      <NavLink to="/" className={styles.logo} aria-label="Home">
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
              <path d="M21.5 3.5 2.5 11l5 2 2 6 3-4 5 3.5z" />
            </svg>
            <span>&nbsp;</span>Black_Labradoodle
      </NavLink>
    </div>
  );


}