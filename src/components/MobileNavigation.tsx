import { useState } from 'react';
import Hamburger from '@components/Hamburger';

import styles from './MobileNavigation.module.css';

interface MobileNavtigationProps {
  menuItemList: { link: string; title: string }[];
}

function MobileNavtigation({ menuItemList }: MobileNavtigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleOnClick() {
    setMenuOpen((prevState: boolean) => !prevState);
  }
  return (
    <div className={styles.container}>
      <Hamburger onClick={handleOnClick} />
      {menuOpen && (
        <div className={styles.linkContainer}>
          {menuItemList.map((menuItem) => (
            <a
              className={styles.link}
              key={menuItem.link}
              href={menuItem.link}
              onClick={() => setMenuOpen(false)}
            >
              {menuItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileNavtigation;
