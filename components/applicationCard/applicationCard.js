import styles from "./applicationCard.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Icons from "../icons/icons";

export default function ApplicationCard({
  title,
  excerpt,
  icon,
  images,
  description,
}) {
  return (
    <div className={styles.root}>
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
      <div className={styles.showIcon}>
        <svg
          width="41"
          height="44"
          viewBox="0 0 41 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="22.5" x2="41" y2="22.5" stroke="black" />
          <line x1="21.5" y1="2.18557e-08" x2="21.5" y2="44" stroke="black" />
        </svg>
      </div>
    </div>
  );
}
