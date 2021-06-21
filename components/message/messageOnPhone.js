import styles from "./message.module.css";
import typography from "../../styles/typography.module.css";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";

const variants = {
  initial: { opacity: 0, y: 20, scale: 0 },
  final: { opacity: 1, y: 0, scale: 1 },
};

/*
initial={{ scale: 0, y: -100 }}
animate={{ scale: 1, y: 0 }}
// variants={variants}
transition={{ stiffness: 100 }}
 */

export default function MessageOnPhone({
  type,
  className,
  icon,
  theme,
  colorTheme,
  postingTime,
  content,
  animate,
  count,
}) {
  const [animationStyles, setAnimationStyles] = useState();
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setAnimationStyles(null);
    window.requestAnimationFrame(() => {
      if (animate) {
        setAnimationStyles(styles.withPopInAnimation);
      }
    });
  }, [count]);
  return (
    <div className={cn(animationStyles, styles.root, className)}>
      <div className={cn(styles.typeContainer, styles.typeContainerIsOnPhone)}>
        <div className={styles.typeLogo}>{icon}</div>
        <div>{`Neue ${type} im`}</div>
        <div
          className={styles.diamond}
          style={{ backgroundColor: colorTheme }}
        />
        <span className={styles.theme} style={{ color: colorTheme }}>
          {theme}
        </span>
        <span>{postingTime}</span>
      </div>
      <div
        className={cn(
          typography.etaInter500,
          styles.content,
          styles.contentIsOnPhone
        )}
      >
        {content}
      </div>
    </div>
  );
}
