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

function Carousel({ children }) {
  const {
    setSwiper,
    slidePrev,
    slideNext,
    onSlideChange,
    slideTo,
    currentSlideIndex,
  } = useSwiper();

  return (
    <div className={cn(styles.carousel)}>
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

  useEffect(() => {
    setStyle(styles.visible);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [filter]);

  const controls = useAnimation();
  const variantsDetails = {
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  useEffect(() => {
    controls.start("visible");
  }, [isOpen]);

  return (
    <div
      className={cn(styles.root, style)}
      style={Object.assign(isOpen ? { backgroundColor: "#eeeeee" } : {}, {
        transitionDelay: `${100 * delayIndex}ms`,
      })}
    >
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.iconContainer}>{icon}</div>

        <div className={styles.textContainer}>
          <h5 className={cn(typography.epsilon500, styles.title)}>{title}</h5>
          <p className={cn(typography.epsilon400, styles.excerpt)}>{excerpt}</p>
        </div>

        <button
          className={cn(styles.showIcon, isOpen && styles.showIconIsOpened)}
        >
          <Icon Component={CaretDownIcon} />
        </button>
      </div>

      {isOpen && (
        <>
          <motion.p className={cn(typography.epsilon400, styles.excerptMobile)}>
            {excerpt}
          </motion.p>

          <motion.div
            className={cn(styles.description, typography.epsilon400)}
            variants={variantsDetails}
            animate={controls}
          >
            {description}
          </motion.div>

          <Button
            isActive={true}
            isDoublePadding={true}
            className={styles.button}
            isBlue={true}
          >
            {`Jetzt ${title} testen`}
          </Button>

          <Carousel>
            {images.map((image, index) => (
              <SwiperSlide className={styles.carouselSlide}>
                <img src={image} alt={""} key={index} />
              </SwiperSlide>
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
}
