import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import { CaretDownIcon, Icon } from "../icon/icon";
import Button from "../button/button";
import { useState } from "react";
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
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(styles.root)}
      style={isOpen ? { backgroundColor: "#eeeeee" } : null}
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
          <p className={cn(typography.epsilon400, styles.excerptMobile)}>
            {excerpt}
          </p>

          <div className={cn(styles.description, typography.epsilon400)}>
            {description}
          </div>

          <Button
            isActive={true}
            isDoublePadding={true}
            className={styles.button}
            isBlue={true}
          >
            Jetzt dpa-News testen
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
