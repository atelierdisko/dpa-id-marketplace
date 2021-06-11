import styles from "./marquee.module.css";
import cn from "classnames";

//todo: fix animation
export default function Marquee({ children, className }) {
  const words = children.split(" ");
  return (
    <div className={cn(styles.root, className)}>
      <ul className={cn(styles.content)}>
        {words.map((word, index) => (
          <li className={styles.word} key={index}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}
