import liteSmile from '../../images/liteSmile.jpg'; // Импортируем картинку
import styles from './Home.module.css';

export function Home() {
  return (
    <div>
      { /*<h1 className="title">Black Labradoodle</h1> */ }
      <div className={styles.mainCnt}>
        { /*<img src={liteSmile} alt="Black Labradoodle" className={styles.image} /> */}
        <img
            src="/BL_logo_2.jpg"
            alt="Black Labradoodle"
            className={styles.image1}
        />
        <div className={styles.text}>Tекст текст текст текст текст текст текст текст текст текст текст текст текст</div>
      </div>
    </div>
  );
}