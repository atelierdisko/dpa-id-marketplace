import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Icons from "../icons/icons";
import Button from "../button/button";
import Slider from "../slider/slider";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { customMedia } from "../../styles/cssExports";
import Carousel from "../Carousel/carousel";

/* todo: use https://swiperjs.com/get-started,
 * see https://github.com/atelierdisko/atelierdisko/blob/main/components/figureCarousel/figureCarousel.js
 * for an implementation reference
 */
export default function ApplicationCard({
  title,
  excerpt,
  icon,
  images,
  description,
}) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: customMedia["--mobile"] });

  const handleSliderClick = ({ target }) => {
    if (/^page/.test(target.id)) {
      const pageNumber = parseInt(target.id.match(/\d+/)[0]);
      setCurrentImageIndex(pageNumber);
      return;
    }
    if (target.name === "back" && currentImageIndex !== 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
    if (target.name === "forward" && currentImageIndex !== images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    setCurrentImage(images[currentImageIndex]);
  }, [currentImageIndex]);

  const handleShowDetailsClick = () => {
    setIsOpen((prevState) => !prevState);
    setCurrentImage(images[0]);
    setCurrentImageIndex(0);
  };

  return (
    <div className={joinClassNames(styles.root)}>
      <div className={styles.iconContainer}>
        <Icons icon={icon} className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <h5 className={joinClassNames(typography.epsilon500, styles.title)}>
          {title}
        </h5>
        {!isMobile && (
          <p className={joinClassNames(typography.epsilon400, styles.excerpt)}>
            {excerpt}
          </p>
        )}
      </div>

      <Icons
        icon="carretDown"
        className={joinClassNames(
          styles.showIcon,
          isOpen && styles.showIconIsOpened
        )}
        onClick={
          handleShowDetailsClick
        } /* todo: move onclick handler to root element */
      />

      {isOpen && (
        <>
          {isMobile && (
            <p
              className={joinClassNames(typography.epsilon400, styles.excerpt)}
            >
              {excerpt}
            </p>
          )}
          <div
            className={joinClassNames(
              styles.description,
              typography.epsilon400
            )}
          >
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
          <Carousel className={styles.carousel}>{images}</Carousel>
          {/*<div className={styles.carousel}>*/}
          {/*  <img src={currentImage} alt="" className={styles.image} />*/}

          {/*  <Slider*/}
          {/*    className={styles.slider}*/}
          {/*    activePage={currentImageIndex}*/}
          {/*    array={[...Array(images.length).keys()]}*/}
          {/*    onClick={handleSliderClick}*/}
          {/*    dark={true}*/}
          {/*  />*/}
          {/*</div>*/}
        </>
      )}
    </div>
  );
}
