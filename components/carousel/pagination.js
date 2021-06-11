import styles from "./pagination.module.css";
import { Bullet } from "./bullet";

function Pagination({ count, activeIndex, slideTo, color }) {
  let bullets = [];

  for (let i = 0; i < count; i++) {
    bullets.push(
      <Bullet
        active={i === activeIndex}
        onClick={() => slideTo(i + 1)}
        color={color}
      />
    );
  }

  return (
    <div className={styles.root}>
      <span className={styles.bullets}>{bullets}</span>
      <span className={styles.numbers}>
        <span className={styles.activePageNumber}>{activeIndex + 1}</span>
        {` / ${count}`}
      </span>
    </div>
  );
}

export { Pagination };
