import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Icons from "../icons/icons";
import Button from "../button/button";
import { useState } from "react";

import Carousel from "../Carousel/carousel";

export default function ApplicationCard({
  title,
  excerpt,
  icon,
  images,
  description,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={joinClassNames(styles.root)}>
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
        icon="carretDown"
        className={joinClassNames(
          styles.showIcon,
          isOpen && styles.showIconIsOpened
        )}
        onClick={() => setIsOpen((prevState) => !prevState)}
      />

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
