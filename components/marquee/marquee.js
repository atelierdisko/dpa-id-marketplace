import styles from "./marquee.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function Marquee({ children, className }) {
  const words = children.split(" ");
  return (
    <div className={joinClassNames(styles.root, className)}>
      <ul className={joinClassNames(styles.content)}>
        {words.map((word) => (
          <li className={styles.word}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
