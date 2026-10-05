import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Contacts.module.css';


export function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
  );


}