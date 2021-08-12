import cn from "classnames";
import styles from "./navigation.module.css";
import typography from "../../styles/typography.module.css";
import { Pagination } from "./pagination";
import Button from "./button";

Navigation.defaultProps = {
  color: "black",
  backAndForward: true,
};

function Navigation({
  className,
  slidePrev,
  slideTo,
  slideNext,
  index,
  length,
  color,
    paginationColor
}) {
  return (
    <div
      className={cn(
        styles.navigation,
        styles[`is${color.capitalize()}`],
        className
      )}
    >
      <Button
        onClick={() => slidePrev()}
        className={cn(typography.zeta500, styles.prevButton)}
      >
        ‹ Zurück
      </Button>

      <Pagination
        count={length}
        activeIndex={index}
        slideTo={slideTo}
        color={paginationColor}
      />

      <Button
        onClick={() => slideNext()}
        className={cn(typography.zeta500, styles.nextButton)}
      >
        Weiter ›
      </Button>
    </div>
  );
}

export { Navigation };
