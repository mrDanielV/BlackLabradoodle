import { motion } from 'framer-motion';
import styles from './Home.module.css';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.mainCnt}>
        <img
            src="/BL_logo_2.jpg"
            alt="Black Labradoodle"
            className={styles.image1}
        />
        <div className={styles.text}>Tекст текст текст текст текст текст текст текст текст текст текст текст текст</div>
      </div>
    </motion.div>
  );
}