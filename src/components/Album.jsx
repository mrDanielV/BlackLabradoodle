import styles from './Album.module.css';

export function Album({data}) {
    console.log(data);

    //return (<div>11</div>);


    return (
        <div className={styles.album}>
            <img src={data.img} alt="Lite Smile" className={styles.albumImage} />

            <div className={styles.albumInfo}>
                <h2 className={styles.albumName}>{data.name}</h2>
                <div className={styles.albumList}>
                {data.tracks.map(({ name }) => (
                    <p>&bull; {name}</p>
                ))}
                </div>

                <div className={styles.links}>Links</div>
            </div>

            
        </div>
    );
}