import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import { CaretDownIcon, Icon } from "../icon/icon";
import Button from "../button/button";
import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "../carousel/navigation";
import { useSwiper } from "../../hooks/useSwiper";
import cn from "classnames";

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

  return useMemo(() => {
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
  }, [children]);
}

export default function ApplicationCard({
  className,
  title,
  excerpt,
  icon,
  images,
  description,
  filter,
  delayIndex,
  link,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState(
    isOpen || delayIndex <= 0 ? styles.visible : styles.hidden
  );
  const [detailsStyle, setDetailsStyle] = useState({ display: "none" });
  const ref = useRef();

  useEffect(() => {
    setStyle(styles.visible);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setDetailsStyle({ maxHeight: ref.current.scrollHeight });
    } else {
      setDetailsStyle({ maxHeight: null });
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [filter]);

  return (
    <div
      className={cn(className, style)}
      style={{
        transitionDelay: `${100 * delayIndex}ms`,
      }}
    >
      <button
        className={cn(styles.header)}
        style={Object.assign(isOpen ? { backgroundColor: "#eeeeee" } : {})}
        onClick={() => setIsOpen(!isOpen)}
      >
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
      </button>

      <div ref={ref} className={styles.details} style={detailsStyle}>
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
          asButton={false}
          href={link}
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

        <div className={styles.additionalPadding} />
      </div>
    </div>
  );
}
