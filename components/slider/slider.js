import styles from "./slider.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import PropTypes from "prop-types";

Slider.propTypes = {
  array: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  activePage: 0,
  activePageColor: "Blue",
  backAndForward: true,
};

export default function Slider({
  array,
  activePage,
  className,
  dark,
  onClick,
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
          onClick={onClick}
          name="back"
        >
          ‹ Zurück
        </button>
      )}
      <div className={styles.pageContainer}>
        {array.map((el, index) => (
          <div
            key={"page" + index}
            onClick={onClick}
            className={joinClassNames(
              styles.page,
              dark && styles.pageDark,
              activePage === index &&
                styles[
                  activePageColor === "Blue" ? "isActiveBlue" : "isActiveGreen"
                ]
            )}
          >
            {}
          </div>
        ))}
      </div>
      <button
        className={joinClassNames(
          typography.zeta500,
          styles.forward,
          activePage === array.length - 1 &&
            (dark ? styles.isDisabledDark : styles.isDisabled)
        )}
        onClick={onClick}
        name="forward"
      >
        {backAndForward ? "Weiter ›" : "Nächste Funktionalität ›"}
      </button>
    </div>
  );
}
