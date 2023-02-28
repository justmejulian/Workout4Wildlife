import styles from './Spacer.module.css';

interface SpacerProps {
  url: string;
}

function Spacer({ url }: SpacerProps) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={styles.container}
    />
  );
}

export default Spacer;
