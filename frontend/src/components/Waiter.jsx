import styles from './Waiter.module.css';

export function Waiter() {
  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.loader}>
        <span className={styles.ring} aria-hidden="true" />
        <span className={styles.ring} aria-hidden="true" />
        <span className={styles.ring} aria-hidden="true" />
        <span className={styles.label}>Loading…</span>
      </div>
    </div>
  );
}