import styles from "./message.module.css";
import typography from "../../styles/typography.module.css";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import cn from "classnames";

Message.defaultProps = {
  disabled: false,
};

export default function Message({
  type,
  className,
  icon,
  id,
  onClick,
  disabled,
  content,
  variants,
  controls,
}) {
  const ref = useRef();
  // const controls = useAnimation();
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
