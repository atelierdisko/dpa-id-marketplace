import styles from "./quotes.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import { Navigation } from "../carousel/navigation";
import { useSwiper } from "../../hooks/useSwiper";
import quotes from "../../data/quotes";
import { useState } from "react";

export default function Quotes({}) {
  const {
    swiper: imageSwiper,
    setSwiper: setImageSwiper,
    slidePrev,
    slideNext,
    onSlideChange,
    slideTo,
    currentSlideIndex,
  } = useSwiper();
  // const [signalPhraseSwiper, setSignalPhraseSwiper] = useState(null);
  const [quoteSwiper, setQuoteSwiper] = useState(null);

  return (
    <div className={cn(styles.root, grid.root)} id={"best-practices"}>
      <Swiper
        loop={true}
        keyboard={true}
        onSwiper={setImageSwiper}
        onSlideChange={onSlideChange}
        className={styles.imageContainer}
        controller={{ control: quoteSwiper }}
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index} className={styles.imageSlide}>
            <img src={quote.image} alt={""} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.textContainer}>
        {/*<p className={cn(typography.zeta500, styles.signalPhrase)}>*/}
        {/*  {quotes[currentSlideIndex].signalPhrase}*/}
        {/*</p>*/}
        <Swiper
          loop={true}
          keyboard={true}
          // onSwiper={setQuoteSwiper}
          // onSlideChange={onSlideChange}
          className={styles.signalPhraseContainer}
          controller={{ control: quoteSwiper }}
        >
          {quotes.map((quote, index) => (
            <SwiperSlide key={index} className={styles.signalPhraseSlide}>
              <p className={cn(typography.zeta500)}>{quote.signalPhrase}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          loop={true}
          keyboard={true}
          onSwiper={setQuoteSwiper}
          onSlideChange={onSlideChange}
          className={styles.quoteContainer}
          controller={{ control: imageSwiper }}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
        >
          {quotes.map((quote, index) => (
            <SwiperSlide key={index} className={styles.quoteSlide}>
              <p className={cn(typography.gamma500)}>{quote.quote}</p>
            </SwiperSlide>
          ))}
        </Swiper>
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
    </div>
  );
}
