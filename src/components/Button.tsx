import type { MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  title: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}

function Button(props: ButtonProps) {

  return (
    <button
      type="button"
      className={styles.button}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Button;
