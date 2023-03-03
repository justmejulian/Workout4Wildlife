import styles from './Hamburger.module.css';

interface HamburgerProps {
  onClick: () => void;
}

function Hamburger({ onClick }: HamburgerProps) {
  return (
    <svg
      className={styles.hamburger}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 11H29"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M2 2H29"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10 20H29"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export default Hamburger;
