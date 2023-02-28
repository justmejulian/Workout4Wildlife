import styles from './Button.module.css';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
