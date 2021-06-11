import styles from "./message.module.css";
import typography from "../../styles/typography.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import cn from "classnames";

Message.defaultProps = {
  onPhone: false,
  disabled: false,
};

export default function Message({
  type,
  className,
  icon,
  id,
  onClick,
  disabled,
  onPhone,
  theme,
  colorTheme,
  postingTime,
  content,
  variants,
  controls,
}) {
  // const { ref, inView, entry } = useInView();
  const ref = useRef();
  // console.log(id, ref, inView, entry);
  return (
    <motion.div
      ref={ref}
      className={cn(styles.root, className)}
      onClick={onClick}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div
        className={cn(
          styles.typeContainer,
          onPhone && styles.typeContainerIsOnPhone
        )}
      >
        {/* todo: add icon component */}
        <div>{onPhone ? `Neue ${type} im` : type}</div>
        {onPhone && (
          <div
            className={styles.diamond}
            style={{ backgroundColor: colorTheme }}
          />
        )}
        {onPhone && (
          <span className={styles.theme} style={{ color: colorTheme }}>
            {theme}
          </span>
        )}
        {onPhone && <span>{postingTime}</span>}
      </div>
      <div
        className={cn(
          typography.etaInter500,
          styles.content,
          onPhone && styles.contentIsOnPhone
        )}
      >
        {content}
      </div>
      {!onPhone && (
        <div
          id={id}
          className={cn(
            styles.overlay,
            disabled && styles.isDisabled
          )}
        />
      )}
    </motion.div>
  );
}
