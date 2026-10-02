//import { useState } from 'react';
import liteSmile from '../../images/liteSmile.jpg';
import darkAngel from '../../images/darkAngel.jpg';
import { Album } from '../components/Album';
//import styles from './Music.module.css';

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
    <div>
      <h1 className="title">Music</h1>

      {albums.map(({album}) => (
        <Album data={album}></Album>
      ))}
    </div>
  );
}