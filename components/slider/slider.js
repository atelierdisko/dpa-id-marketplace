import styles from "./slider.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function Slider({
  array,
  activePage,
  className,
  dark,
  onClick,
}) {
  return (
    <div className={joinClassNames(className, styles.root)}>
      <button
        className={joinClassNames(
          typography.zeta500,
          styles.back,
          activePage === 0 && (dark ? styles.isDisabledDark : styles.isDisabled)
        )}
        onClick={onClick}
        name="back"
      >
        ‹ Zurück
      </button>
      <div className={styles.pageContainer}>
        {array.map((el, index) => (
          <div
            className={joinClassNames(
              styles.page,
              dark && styles.pageDark,
              activePage === index && styles.isActive
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
        Weiter ›
      </button>
    </div>
  );
}
