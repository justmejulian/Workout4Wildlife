import cls from 'classnames'
import styles from './PrizeStops.module.css';

import PrizeStop, { Stop } from './PrizeStop';
import { useState } from 'react';

interface PrizeStopsProps {
  stops: Stop[];
}

function PrizeStops({ stops }: PrizeStopsProps) {
  const [selected, setSelected] = useState(1)

  return (
    <div className={styles.container}>
      {stops[selected] &&
        <PrizeStop key={stops[selected]?.title} stop={stops[selected] as Stop} />
      }
      <div className={styles.dotContainer}>
        {
          stops.map((stop, index) => (
            <div
              key={'dot' + stop.title}
              className={cls(styles.dot, { [styles.selected as string]: selected === index })}
              onClick={() => setSelected(index)} ></div>
          ))
        }
      </div>
    </div >
  );
}

export default PrizeStops;
