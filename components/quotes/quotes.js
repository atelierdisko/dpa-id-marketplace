import styles from "./quotes.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import SwiperController from "../swiperController/swiperController";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Quotes({ className, data: quotes }) {
  const [swiper, setSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slideNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const onSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };
  return (
    <>
      <section className={joinClassNames(styles.root, grid.root, className)}>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          onSlideChange={onSlideChange}
          className={styles.image}
        >
          {quotes.map((quote, index) => (
            <SwiperSlide>
              <img src={quote.image} alt={""} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className={joinClassNames(typography.zeta500, styles.signalPhrase)}>
          {quotes[currentSlideIndex].signalPhrase}
        </p>
        <p className={joinClassNames(typography.gamma500, styles.quote)}>
          {quotes[currentSlideIndex].quote}
        </p>

        <SwiperController
          array={[...Array(quotes.length).keys()]}
          activePage={currentSlideIndex}
          className={styles.swiperController}
          onNextClick={() => slideNext()}
          onPreviousClick={() => slidePrev()}
        />
      </section>
    </>
  );
}
