import { motion } from 'framer-motion';
import { useApi } from '../hooks/useApi';
import { Album } from '../components/Album';
import { FadeIn } from '../components/FadeIn';
import { Waiter } from '../components/Waiter';

export function Music() {
    const { data, loading, error } = useApi('/api/tracks');
  
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
      <h1 className="title">Music</h1>

      {data.map((album, index) => (
        <FadeIn key={album.name} delay={index * 0.1}>
          <Album data={album}></Album>
        </FadeIn>
      ))}
    </motion.div>
  );
}