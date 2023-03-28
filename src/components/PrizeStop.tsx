import styles from './PrizeStop.module.css';

export interface Stop {
  title: string;
  text: string;
  logo: string;
  cover: string;
}

interface PrizeStopProps {
  stop: Stop;
}

function PrizeStop({ stop }: PrizeStopProps) {
  return (
    <div className={styles.stop}>
      <img
        className={styles.cover}
        src={stop.cover}
        alt={stop.title + ' cover'}
      />
      <div className={styles.description}>
        <img
          className={styles.logo}
          src={stop.logo}
          alt={stop.title + ' logo'}
        />
        <p className={styles.title}>{stop.title}</p>
        <p>{stop.text}</p>
      </div>
    </div>
  );
}

export default PrizeStop;
