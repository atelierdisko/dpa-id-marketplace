import styles from "./marquee.module.css";
import cn from "classnames";
import grid from "../../styles/grid.module.css";

//todo: fix animation
export default function Marquee({ children, className }) {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.content}>
        <div>{children}</div>
      </div>
    </div>
  );
}
