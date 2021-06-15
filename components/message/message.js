import styles from "./message.module.css";
import typography from "../../styles/typography.module.css";
import { motion, useAnimation } from "framer-motion";
import cn from "classnames";

Message.defaultProps = {
  isDisabled: false,
};

export default function Message({
  type,
  className,
  icon,
  isDisabled,
  content,
  setHiddenMessages,
  message,
  setMessage,
  setPhoneMessages,
  hiddenMessages,
}) {
  const controls = useAnimation();

  const variants = {
    normal: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    shrink: {
      scale: 0.85,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const handleClick = () => {
    if (!message.disabled) {
      controls.start("shrink").then(() => controls.start("normal"));
      setPhoneMessages((prev) => [message, ...prev]);
    }

    if (hiddenMessages.length === 0) {
      setMessage((prevMessage) => ({ ...prevMessage, disabled: true }));
    } else {
      setMessage(hiddenMessages[0]);
      setHiddenMessages((prev) => prev.slice(1));
    }
  };

  return (
    <motion.div
      className={cn(styles.root, className)}
      onClick={handleClick}
      animate={controls}
      variants={variants}
    >
      <div className={cn(styles.typeContainer)}>
        <div className={styles.typeLogo}>{icon}</div>
        <div>{type}</div>
      </div>
      <div className={cn(typography.etaInter500, styles.content)}>
        {content}
      </div>
      <div className={cn(styles.overlay, isDisabled && styles.isDisabled)} />
    </motion.div>
  );
}
