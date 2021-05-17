import styles from "./slider.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function Slider({ array, activePage, className }) {
  return (
    <div className={joinClassNames(className, styles.root)}>
      <div className={joinClassNames(typography.zeta500, styles.back)}>
        ‹ Zurück
      </div>
      <div className={styles.pages}>
        {array.map((el, index) => (
          <div
            className={joinClassNames(
              styles.page,
              activePage === index + 1 && styles.isActive
            )}
          >
            {}
          </div>
        ))}
      </div>
      <div className={joinClassNames(typography.zeta500, styles.forward)}>
        Weiter ›
      </div>
    </div>
  );
}
