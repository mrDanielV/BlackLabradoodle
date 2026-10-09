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

        <br />
        <br />
        <div className={styles.text}>
          Привет, друг! Я Черный Лабрадудль и если ты просто любишь клёвую музыку, то нам с тобой по пути. 
          Давай сыграем вместе, и пусть мир слегка содрогнётся от рокешника, 
          а потом улыбнётся мягкому звуку классической струны. 
          Открывай раздел <a href='./music' className='link'>Музыка</a> и погнали!</div>
      </div>
    </motion.div>
  );
}