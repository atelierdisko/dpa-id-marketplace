import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Icons from "../icons/icons";
import Button from "../button/button";
import Slider from "../slider/slider";
import { useEffect, useState } from "react";

export default function ApplicationCard({
  title,
  excerpt,
  icon,
  images,
  description,
  backgroundColor,
  color,
}) {
  console.log(backgroundColor, title);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(true);
  const [grayShade, setGrayShade] = useState("blue");
  const [gradientLimit, setGradientLimit] = useState("35%");

  const toggleHover = () => {
    setIsHovered((prevState) => !prevState);
    console.log(isHovered);
  };

  useEffect(() => {
    if (!isHovered) {
      setGrayShade("#eeeeee");
      setGradientLimit("65%");
    } else {
      setGrayShade("#f5f5f5");
      setGradientLimit("35%");
    }
  }, [isHovered]);

  const handleSliderClick = ({ target }) => {
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
    <div
      className={joinClassNames(styles.root, styles["root" + backgroundColor])}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      // style={{
      //   background: `linear-gradient(150deg, ${color}, ${grayShade} ${gradientLimit})`,
      // }}
    >
      <div className={styles.compact}>
        <div className={styles.iconContainer}>
          <Icons icon={icon} className={styles.icon} />
        </div>
        <div className={styles.textContainer}>
          <h5 className={joinClassNames(typography.epsilon500, styles.title)}>
            {title}
          </h5>
          <p className={joinClassNames(typography.epsilon400, styles.excerpt)}>
            {excerpt}
          </p>
        </div>

        <Icons
          icon="show"
          color="#0045F4"
          className={joinClassNames(
            styles.showIcon,
            isOpen && styles.showIconIsOpened
          )}
          onClick={handleShowDetailsClick}
        />
      </div>

      <div
        className={joinClassNames(
          styles.details,
          isOpen && styles.detailsDisplayed
        )}
      >
        <div className={styles.description}>
          <div className={joinClassNames(typography.epsilon400)}>
            {description}
          </div>
          <Button
            isActive={true}
            isDoublePadding={true}
            className={styles.button}
          >
            Jetzt dpa-News testen
          </Button>
        </div>

        <div className={styles.carrusel}>
          <img src={currentImage} alt="" className={styles.image} />
          <Slider
            className={styles.slider}
            activePage={currentImageIndex}
            array={[...Array(images.length).keys()]}
            onClick={handleSliderClick}
            dark={true}
          />
        </div>
      </div>
    </div>
  );
}
