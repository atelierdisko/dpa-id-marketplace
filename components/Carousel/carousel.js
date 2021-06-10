import styles from "./carousel.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination, Mousewheel, Keyboard } from "swiper/core";
import { useEffect, useRef, useState } from "react";

SwiperCore.use([Pagination, Mousewheel, Keyboard]);

export default function Carousel({ children, className }) {
  const [swiper, setSwiper] = useState(null);
  if (typeof window !== "undefined") {
    window.swiper = swiper;
  }
  return (
    <div className={joinClassNames(styles.root, className)}>
      <Swiper
        pagination={{
          clickable: true,
          modifierClass: "",
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        mousewheel={true}
        loop={true}
        keyboard={true}
        onSwiper={setSwiper}
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
          onClick={() => swiper?.slidePrev()}
          className={joinClassNames(typography.zeta500, styles.prevButton)}
        >
          ‹ Zurück
        </button>
        <button
          onClick={() => swiper?.slideNext()}
          className={joinClassNames(typography.zeta500, styles.nextButton)}
        >
          Weiter ›
        </button>
      </div>
    </div>
  );
}
