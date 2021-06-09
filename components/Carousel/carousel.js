import styles from "./carousel.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";
import { useEffect, useRef } from "react";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Carousel({ children, className }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  let navigation;
  useEffect(() => {
    navigation = {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    };
  }, []);
  return (
    <div className={className}>
      <Swiper
        // cssMode={true}
        // navigation={true}
        // pagination={true}
        pagination={{ clickable: true, modifierClass: styles.pagination }}
        // navigation={{
        //   prevEl: prevRef.current ? prevRef.current : undefined,
        //   nextEl: nextRef.current ? nextRef.current : undefined,
        // }}
        navigation={{ navigation }}
        // onBeforeInit={{
        //     swiper.params.navigation.prevEl = prevRef.current,
        //     swiper.params.navigation.nextEl = nextRef.current,
        // }}
        mousewheel={true}
        keyboard={true}
        className={styles.swiperContainer}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img src={child} alt={""} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigation}>
        <button
          ref={prevRef}
          className={joinClassNames(typography.zeta500, styles.prevButton)}
        >
          ‹ Zurück
        </button>
        <button
          ref={nextRef}
          className={joinClassNames(typography.zeta500, styles.nextButton)}
        >
          Weiter ›
        </button>
      </div>
    </div>
  );
}
