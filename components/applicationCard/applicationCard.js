import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import { CaretDownIcon, Icon } from "../icon/icon";
import Button from "../button/button";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "../carousel/navigation";
import { useSwiper } from "../../hooks/useSwiper";
import cn from "classnames";
import Collapsible from "../collapsible/collapsible";

ApplicationCard.propTypes = {
  /**
   * Card Icon Component
   */
  icon: PropTypes.elementType.isRequired,
};

function Carousel({ classname, images, initSwiper }) {
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
      <img
        className={cn(
          styles.carouselPlaceholder,
          initSwiper && styles.carouselPlaceholderHidden
        )}
        src={images?.[0]}
        alt=""
      />
      {initSwiper ? (
        <Swiper
          loop={true}
          keyboard={true}
          onSwiper={setSwiper}
          onSlideChange={onSlideChange}
          className={styles.carouselContainer}
        >
          {images.map((image, index) => (
            <SwiperSlide className={styles.carouselSlide} key={index}>
              <img src={image} alt={""} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
      <Navigation
        className={styles.carouselNavigation}
        index={currentSlideIndex}
        length={images.length}
        slideTo={slideTo}
        slideNext={slideNext}
        slidePrev={slidePrev}
      />
    </div>
  );
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
  const [initSwiper, setInitSwiper] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [filter]);

  return (
    <div
      className={className}
      style={{
        transitionDelay: `${100 * delayIndex}ms`,
      }}
      ref={(node) => {
        if (!node) {
          return;
        }
        node.classList.remove(styles.hidden);
        node.classList.remove(styles.visible);
        window.requestAnimationFrame(() => {
          if (isOpen || delayIndex <= 0) {
            node.classList.add(styles.visible);
          } else {
            node.classList.remove(styles.hidden);
          }
        });
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
      <Collapsible
        isOpen={isOpen}
        speed={2}
        unmountOnClose={false}
        onOpenTransitionEnd={() => {
          setInitSwiper(true);
        }}
        onCloseTransitionEnd={() => {
          setInitSwiper(false);
        }}
      >
        <div
          className={cn(styles.details, styles.isHiddenDetails)}
          ref={(node) => {
            if (!node) {
              return;
            }
            window.requestAnimationFrame(() => {
              if (isOpen) {
                node.classList.add(styles.isVisibleDetails);
              } else {
                node.classList.remove(styles.isVisibleDetails);
              }
            });
          }}
        >
          <p className={cn(typography.epsilon400, styles.excerptMobile)}>
            {excerpt}
          </p>
          <div className={cn(styles.description, typography.epsilon400)}>
            {description}
          </div>
          <Button
            isActive={true}
            isDoublePadding={true}
            className={cn(styles.button)}
            isBlue={true}
            asButton={false}
            href={link}
          >
            {`Jetzt ${title} testen`}
          </Button>
          <div className={cn(styles.carouselWrapper)}>
            <Carousel
              images={images}
              classname={styles.carousel}
              initSwiper={initSwiper}
            />
          </div>
          <div className={styles.additionalPadding} />
        </div>
      </Collapsible>
    </div>
  );
}
