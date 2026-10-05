import { motion } from 'framer-motion';
import liteSmile from '../../images/liteSmile.jpg';
import darkAngel from '../../images/darkAngel.jpg';
import { Album } from '../components/Album';

const liteSmileTracks = [
  {name: 'Lite Smile'},
  {name: 'Sarcasm'},
  {name: 'Autumn rondo'},
  {name: 'Just Summer'},
  {name: "Winter's Grin"},
  {name: 'Hallelujah'},
  {name: 'Romance Anonimo'},
  {name: 'The House of The Rising Sun'}
];

const darkAngelTracks = [
  {name: 'Dark Angel'}
];

const albums = [
  {album: {
    name: 'Lite Smile', img: liteSmile, tracks: liteSmileTracks
  }},
  {album: {
    name: 'Dark Angel (single)', img: darkAngel, tracks: darkAngelTracks
  }}
];

export function Music() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="title">Music</h1>

      {albums.map(({album}) => (
        <Album data={album}></Album>
      ))}
    </motion.div>
  );
}