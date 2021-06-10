import styles from "./message.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import typography from "../../styles/typography.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

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
      className={joinClassNames(styles.root, className)}
      onClick={onClick}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div
        className={joinClassNames(
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
        className={joinClassNames(
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
          className={joinClassNames(
            styles.overlay,
            disabled && styles.isDisabled
          )}
        />
      )}
    </motion.div>
  );
}
