import styles from "./quotes.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import SwiperController from "../swiperController/swiperController";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Quotes({ className, data: quotes }) {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [currentSignalPhrase, setCurrentSignalPhrase] = useState(
  //   data[0].signalPhrase
  // );
  // const [currentQuote, setCurrentQuote] = useState(data[0].quote);
  // const [currentImage, setCurrentImage] = useState(data[0].image);
  //
  // const handleClick = ({ target }) => {
  //   if (/^page/.test(target.id)) {
  //     const pageNumber = parseInt(target.id.match(/\d+/)[0]);
  //     setCurrentSlide(pageNumber);
  //     return;
  //   }
  //
  //   if (target.name === "forward" && currentSlide !== data.length - 1) {
  //     setCurrentSlide((prevSlide) => prevSlide + 1);
  //   }
  //   if (target.name === "back" && currentSlide !== 0) {
  //     setCurrentSlide((prevSlide) => prevSlide - 1);
  //   }
  // };
  //
  // useEffect(() => {
  //   setCurrentSignalPhrase(data[currentSlide].signalPhrase);
  //   setCurrentQuote(data[currentSlide].quote);
  //   setCurrentImage(data[currentSlide].image);
  // }, [currentSlide]);

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
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          onSlideChange={onSlideChange}
          className={styles.signalPhrase}
        >
          {quotes.map((quote, index) => (
            <SwiperSlide>
              <p className={joinClassNames(typography.zeta500)}>
                {quote.signalPhrase}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          onSlideChange={onSlideChange}
          className={styles.quote}
        >
          {quotes.map((quote, index) => (
            <SwiperSlide>
              <p className={joinClassNames(typography.gamma500)}>
                {quote.quote}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*<img src={currentImage} className={styles.image} alt={""} />*/}
        {/*<p className={joinClassNames(typography.zeta500, styles.signalPhrase)}>*/}
        {/*  {currentSignalPhrase}*/}
        {/*</p>*/}
        {/*<p className={joinClassNames(typography.gamma500, styles.quote)}>*/}
        {/*  {currentQuote}*/}
        {/*</p>*/}
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
