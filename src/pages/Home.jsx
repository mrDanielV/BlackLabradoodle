import { motion } from 'framer-motion';
import styles from './Home.module.css';

import { mainText } from '../data/mainText';

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

        <br />
        <br />
        <div className={styles.text}>{mainText}</div>
      </div>
    </motion.div>
  );
}