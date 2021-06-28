import styles from "./message.module.css";
import typography from "../../styles/typography.module.css";
import { motion, useAnimation } from "framer-motion";
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { DpaSelectIcon, Icon } from "../icon/icon";

Message.defaultProps = {
  isDisabled: false,
};

export default function Message({
  type,
  className,
  icon, // icon prop currently not used a it is hardcoded to DpaSelectIcon below
  isDisabled,
  content,
  setHiddenMessages,
  message,
  setMessage,
  hiddenMessages,
  onClick,
  hideBelowMinWidth = false,
}) {
  const controls = useAnimation();
  const ref = useRef();
  const [width, setWidth] = useState();
  const minWidth = 256;

  const observer = useRef(
    typeof window === "undefined"
      ? null
      : new ResizeObserver((entries) => {
          const { width } = entries[0].contentRect;
          setWidth(width);
        })
  );

  useEffect(() => {
    observer?.current?.observe(ref.current);
    return () => {
      if (ref.current) {
        observer?.current?.unobserve(ref.current);
      }
    };
  }, [ref, observer]);

  const variants = {
    normal: {
      scale: 1,
      transition: {
        duration: 0.1,
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
      onClick?.();
    }

    if (hiddenMessages.length === 0) {
      setMessage((prevMessage) => ({ ...prevMessage, disabled: true }));
    } else {
      setMessage(hiddenMessages[0]);
      setHiddenMessages((prev) => prev.slice(1));
    }
  };

  const hiddenStyle =
    hideBelowMinWidth && width < minWidth ? styles.hidden : null;

  const contentComp = (
    <div className={cn(styles.message, styles.messageToSend)}>
      <div className={cn(styles.typeContainer)}>
        <div className={styles.typeLogo}>
          <Icon Component={DpaSelectIcon} />
        </div>
        <div>{type}</div>
      </div>
      <div className={cn(typography.etaInter500, styles.content)}>
        <div className={styles.contentText}>{content}</div>
      </div>
      <div className={cn(styles.overlay, isDisabled && styles.isDisabled)} />
    </div>
  );

  return (
    <div
      className={cn(styles.root, hiddenStyle, className)}
      ref={ref}
      onClick={handleClick}
    >
      <div className={styles.relativeWrapper}>{contentComp}</div>
      <motion.div
        className={styles.absoluteWrapper}
        animate={controls}
        variants={variants}
      >
        {contentComp}
      </motion.div>
    </div>
  );
}
