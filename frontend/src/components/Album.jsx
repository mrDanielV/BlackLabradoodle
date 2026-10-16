import styles from './Album.module.css';

export function Album({ data }) {
    const { name = 'Без названия', img = '', tracks = [] } = data;

    return (
        <div className={styles.album}>
            <div className={styles.albumInfo}>
                <img src={data.img} alt={styles.albumName} className={styles.albumImage} />
                <div className={styles.albumBody}>
                    <h2 className={styles.albumName}>{data.name}</h2>

                    <div className={styles.albumList}>
                        {data.tracks && data.tracks.map(({ name }) => (
                            <p key={name}>&bull; {name}</p>
                        ))}
                        </div>

                    <div className={styles.links}>
                        <a
                            href="https://open.spotify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Слушать на Spotify"
                            className={styles.linkBadge}
                        >
                            <img
                                src="/spotify1.png"
                                alt="Spotify"
                                className={styles.badgeImage}
                            />
                        </a>

                        <a
                            href="https://music.yandex.ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Слушать в Яндекс.Музыке"
                            className={styles.linkBadge}
                        >
                            <img
                                src="/yandex1.png"
                                alt="Яндекс.Музыка"
                                className={styles.badgeImage}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}