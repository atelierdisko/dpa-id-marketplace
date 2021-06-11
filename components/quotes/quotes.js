import styles from "./quotes.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import { Navigation } from "../carousel/navigation";
import { useSwiper } from "../../hooks/useSwiper";

export default function Quotes({ className, data: quotes }) {
  const {
    setSwiper,
    slidePrev,
    slideNext,
    onSlideChange,
    slideTo,
    currentSlideIndex,
  } = useSwiper();

  return (
    <div className={cn(styles.root, grid.root, className)}>
      <Swiper
        mousewheel={true}
        loop={true}
        keyboard={true}
        onSwiper={setSwiper}
        onSlideChange={onSlideChange}
        className={styles.carouselContainer}
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index} className={styles.carouselSlide}>
            <img src={quote.image} alt={""} />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className={cn(typography.zeta500, styles.signalPhrase)}>
        {quotes[currentSlideIndex].signalPhrase}
      </p>
      <p className={cn(typography.gamma500, styles.quote)}>
        {quotes[currentSlideIndex].quote}
      </p>

      <Navigation
        className={styles.carouselNavigation}
        index={currentSlideIndex}
        length={quotes.length}
        slideTo={slideTo}
        slideNext={slideNext}
        slidePrev={slidePrev}
        color={"white"}
      />
    </div>
  );
}
