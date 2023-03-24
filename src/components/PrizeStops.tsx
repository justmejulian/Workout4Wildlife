import cls from 'classnames';
import styles from './PrizeStops.module.css';

import PrizeStop, { Stop } from './PrizeStop';
import { useState } from 'react';

interface PrizeStopsProps {
  stops: Stop[];
}

function PrizeStops({ stops }: PrizeStopsProps) {
  const [selected, setSelected] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      setSelected((prevState) =>
        prevState >= stops.length - 1 ? 0 : prevState + 1
      );
    }

    if (diff < -5) {
      setSelected((prevState) =>
        prevState <= 0 ? stops.length - 1 : prevState - 1
      );
    }

    setTouchPosition(null);
  };

  return (
    <div className={styles.container}>
      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        {stops[selected] && (
          <PrizeStop
            key={stops[selected]?.title}
            stop={stops[selected] as Stop}
          />
        )}
      </div>
      <div className={styles.dotContainer}>
        {stops.map((stop, index) => (
          <div
            key={'dot' + stop.title}
            className={cls(styles.dot, {
              [styles.selected as string]: selected === index,
            })}
            onClick={() => setSelected(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default PrizeStops;
