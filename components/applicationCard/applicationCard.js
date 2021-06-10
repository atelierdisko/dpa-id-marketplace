import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import { CaretDownIcon } from "../icon/icon";
import Button from "../button/button";
import { useState } from "react";
import PropTypes from "prop-types";

import Carousel from "../Carousel/carousel";

ApplicationCard.propTypes = {
  /**
   * Card Icon Component
   */
  icon: PropTypes.elementType.isRequired,
};

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
      className={joinClassNames(styles.root)}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <div className={styles.iconContainer}>{icon}</div>

      <div className={styles.textContainer}>
        <h5 className={joinClassNames(typography.epsilon500, styles.title)}>
          {title}
        </h5>
        <p className={joinClassNames(typography.epsilon400, styles.excerpt)}>
          {excerpt}
        </p>
      </div>

      <button
        className={joinClassNames(
          styles.showIcon,
          isOpen && styles.showIconIsOpened
        )}
      >
        <CaretDownIcon />
      </button>

      {isOpen && (
        <>
          <p
            className={joinClassNames(
              typography.epsilon400,
              styles.excerptMobile
            )}
          >
            {excerpt}
          </p>

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
        </>
      )}
    </div>
  );
}
