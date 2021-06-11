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
  if (onPhone)
    return (
      <motion.div
        ref={ref}
        className={cn(styles.root, className)}
        onClick={onClick}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={cn(styles.typeContainer, styles.typeContainerIsOnPhone)}
        >
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

  return (
    <motion.div
      ref={ref}
      className={cn(styles.root, className)}
      onClick={onClick}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className={cn(styles.typeContainer)}>
        {/* todo: add icon component */}
        <div>{type}</div>
      </div>
      <div className={cn(typography.etaInter500, styles.content)}>
        {content}
      </div>
      <div
        id={id}
        className={cn(styles.overlay, disabled && styles.isDisabled)}
      />
    </motion.div>
  );
}
