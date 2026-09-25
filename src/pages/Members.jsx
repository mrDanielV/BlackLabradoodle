import { useState } from 'react';
import greenLead1 from '../../images/greenLead1.jpg';
import styles from './Members.module.css';

export function Members() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 className="title">Team-band</h1>

      <div className={styles.member}>
        <img src={greenLead1} alt="Green Lead" className={styles.memberImage} />

        <div className={styles.memberInfo}>
          <h2 className={styles.memberName}>Green Lead</h2>

          <div className={styles.memberRoleRow}>
            <span className={styles.memberRole}>Solo-лидер</span>
            <button type="button" className={styles.memberToggle}
              aria-expanded={isOpen}
              aria-label="Показать текст"
              onClick={() => setIsOpen((v) => !v)}
            >
              &gt;&gt;
            </button>
          </div>

          <p className={`${styles.memberText} ${isOpen ? styles.open : ''}`}>
            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          </p>
        </div>
      </div>
    </div>
  );
}