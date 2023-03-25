import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './PrizeStops.module.css';

import PrizeStop, { Stop } from './PrizeStop';

interface PrizeStopsProps {
  stops: Stop[];
}

function PrizeStops({ stops }: PrizeStopsProps) {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination
        loop
      >
        {stops.map((stop) => (
          <SwiperSlide key={stop?.title}>
            <PrizeStop stop={stop} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PrizeStops;
