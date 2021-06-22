import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import { CaretDownIcon, Icon } from "../icon/icon";
import Button from "../button/button";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "../carousel/navigation";
import { useSwiper } from "../../hooks/useSwiper";
import cn from "classnames";
import { motion, useAnimation } from "framer-motion";

ApplicationCard.propTypes = {
  /**
   * Card Icon Component
   */
  icon: PropTypes.elementType.isRequired,
};

function Carousel({ children, classname }) {
  const {
    setSwiper,
    slidePrev,
    slideNext,
    onSlideChange,
    slideTo,
    currentSlideIndex,
  } = useSwiper();

  return (
    <div className={classname}>
      <Swiper
        loop={true}
        keyboard={true}
        onSwiper={setSwiper}
        onSlideChange={onSlideChange}
        className={styles.carouselContainer}
      >
        {children}
      </Swiper>

      <Navigation
        className={styles.carouselNavigation}
        index={currentSlideIndex}
        length={children.length}
        slideTo={slideTo}
        slideNext={slideNext}
        slidePrev={slidePrev}
      />
    </div>
  );
}

export default function ApplicationCard({
  title,
  excerpt,
  icon,
  images,
  description,
  filter,
  delayIndex,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState(isOpen ? styles.visible : styles.hidden);
  const [detailsStyle, setDetailsStyle] = useState({ display: "none" });

  useEffect(() => {
    setStyle(styles.visible);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [filter]);

  // useEffect(() => {
  //   if (!isOpen) {
  //     setTimeout(() => {
  //       setDetailsStyle({ display: "none" });
  //     }, 550);
  //   } else {
  //     setTimeout(() => {
  //       setDetailsStyle({ display: "grid" });
  //     }, 550);
  //   }
  // }, [isOpen]);

  // const variants = {
  //   hidden: { opacity: 0, scale: 0 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       // delay: 0.3 * index,
  //       duration: 0.1,
  //     },
  //   },
  //   // exit: {
  //   //   opacity: 0,
  //   //   scale: 0,
  //   // },
  //   opened: {},
  // };

  // const controls = useAnimation();
  // const variantsDetails = {
  //   visible: { opacity: 1, transition: { duration: 1 } },
  // };
  // useEffect(() => {
  //   controls.start("visible");
  // }, [isOpen]);

  return (
    <>
      <div
        className={cn(styles.root, style)}
        style={Object.assign(isOpen ? { backgroundColor: "#eeeeee" } : {}, {
          transitionDelay: `${100 * delayIndex}ms`,
        })}
        // style={isOpen ? { backgroundColor: "#eeeeee" } : null}
        // variants={variants}
        // initial={{ opacity: 0, scale: 0 }}
        // annimate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, scale: 0 }}
      >
        <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.iconContainer}>{icon}</div>

          <div className={styles.textContainer}>
            <h5 className={cn(typography.epsilon500, styles.title)}>{title}</h5>
            <p className={cn(typography.epsilon400, styles.excerpt)}>
              {excerpt}
            </p>
          </div>

          <button
            className={cn(styles.showIcon, isOpen && styles.showIconIsOpened)}
          >
            <Icon Component={CaretDownIcon} />
          </button>
        </div>
      </div>

      {/*{isOpen && (*/}
      <div
        className={cn(styles.details, isOpen && styles.isOpenedDetails)}
        style={detailsStyle}
      >
        <p
          className={cn(
            typography.epsilon400,
            styles.excerptMobile,
            isOpen && styles.isVisibleDetails
          )}
        >
          {excerpt}
        </p>

        <div
          className={cn(
            styles.description,
            typography.epsilon400,
            isOpen && styles.isVisibleDetails
          )}
        >
          {description}
        </div>

        <Button
          isActive={true}
          isDoublePadding={true}
          className={cn(styles.button, isOpen && styles.isVisibleDetails)}
          isBlue={true}
        >
          {`Jetzt ${title} testen`}
        </Button>

        <Carousel
          classname={cn(styles.carousel, isOpen && styles.isVisibleDetails)}
        >
          {images.map((image, index) => (
            <SwiperSlide className={styles.carouselSlide}>
              <img src={image} alt={""} key={index} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
      {/*)}*/}
    </>
  );
}
