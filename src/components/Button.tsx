import styles from './Button.module.css';

function Button() {
  return (
    <button
      className={styles.button}
      onClick={() => {
        console.log('Button Clicked');
      }}
    >
      Hello
    </button>
  );
}

export default Button;
