import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { Waiter } from '../components/Waiter';
import { useApi } from '../hooks/useApi';


//import { mainText } from '../data/mainText';

export function Home() {
  const { data, loading, error } = useApi('/api/home');

  if (loading) return <Waiter />;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

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
        { /*<div className={styles.text}>{mainText}</div> */ }
        
        <div className={styles.text}>
          {data.map((block, i) => {
            if (block.type === 'text') {
              return <span key={i}>{block.text}</span>;
            }
            if (block.type === 'endblock') {
              return <div key={i} style={{ height: '1.2rem' }} />;  // пустой блок-разделитель
            }
            if (block.type === 'link') {
              return <Link key={i} to={block.to} className="link"> {block.text} </Link>;
            }
            return null;
          })}
        </div>

      </div>
    </motion.div>
  );
}