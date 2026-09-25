//import { useState } from 'react';
import liteSmile from '../../images/liteSmile.jpg';
import styles from './Music.module.css';

const liteSmileTracks = [
  {name: 'Lite Smile'},
  {name: 'Sarcasm'},
  {name: ' Autumn rondo'},
  {name: 'Just Summer'},
  {name: "Winter's Grin"},
  {name: 'Hallelujah'}
];

export function Music() {
  return (
    <div>
      <h1 className="title">Music</h1>

      <div className={styles.album}>
        <img src={liteSmile} alt="Lite Smile" className={styles.albumImage} />

        <div className={styles.albumInfo}>
          <h2 className={styles.albumName}>Lite Smile</h2>
          <div className={styles.albumList}>
            {liteSmileTracks.map(({ name }) => (
              <p>&bull; {name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}