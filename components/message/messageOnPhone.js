import styles from "./message.module.css";
import typography from "../../styles/typography.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import cn from "classnames";

const variants = {
  initial: { opacity: 0, y: 20, scale: 0 },
  final: { opacity: 1, y: 0, scale: 1 },
};
export default function MessageOnPhone({
  type,
  className,
  icon,
  id,
  theme,
  colorTheme,
  postingTime,
  content,
  // variants,
  controls,
}) {
  const ref = useRef();
  return (
    <motion.div
      ref={ref}
      className={cn(styles.root, className)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      // variants={variants}
      transition={{ duration: 3 }}
    >
      <div className={cn(styles.typeContainer, styles.typeContainerIsOnPhone)}>
        {/* todo: add icon component */}
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
    </motion.div>
  );
}
