import styles from "./swiperController.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import PropTypes from "prop-types";

SwiperController.propTypes = {
  array: PropTypes.array.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onNextPrevious: PropTypes.func.isRequired,
};

SwiperController.defaultProps = {
  activePage: 0,
  activePageColor: "Blue",
  backAndForward: true,
};

export default function SwiperController({
  array,
  activePage,
  className,
  dark,
  onNextClick,
  onPreviousClick,
  activePageColor,
  backAndForward,
}) {
  return (
    <div className={joinClassNames(className, styles.root)}>
      {backAndForward && (
        <button
          className={joinClassNames(
            typography.zeta500,
            styles.back,
            activePage === 0 &&
              (dark ? styles.isDisabledDark : styles.isDisabled)
          )}
          onClick={onPreviousClick}
          name="back"
        >
          ‹ Zurück
        </button>
      )}
      <div className={styles.pagination}>
        {array.map((el, index) => (
          <div
            id={"page" + index}
            key={"page" + index}
            className={joinClassNames(
              styles.page,
              dark && styles.pageDark,
              activePage === index &&
                styles[
                  activePageColor === "Blue" ? "isActiveBlue" : "isActiveGreen"
                ]
            )}
          />
        ))}
      </div>
      <div className={styles.paginationMobile}>
        <span className={styles.activePage}>{activePage + 1}</span>
        {` / ${array.length}`}
      </div>
      <button
        className={joinClassNames(
          typography.zeta500,
          styles.forward,
          activePage === array.length - 1 &&
            (dark ? styles.isDisabledDark : styles.isDisabled)
        )}
        onClick={onNextClick}
        name="forward"
      >
        {backAndForward ? "Weiter ›" : "Nächste Funktionalität ›"}
      </button>
    </div>
  );
}
