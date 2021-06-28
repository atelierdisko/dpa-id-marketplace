import React, { useEffect, useRef, useState } from "react";
import styles from "./collapsible.module.css";

function toPx(value) {
  return typeof value === "number" ? `${value}px` : String(value);
}

function Collapsible({
  children,
  isOpen,
  speed = 1.5,
  unmountOnClose = true,
  onOpenTransitionStart,
  onOpenTransitionEnd,
  onCloseTransitionStart,
  onCloseTransitionEnd,
}) {
  const ref = useRef();
  const heightRef = useRef("");
  const prevIsOpenRef = useRef();
  const [isTransitionRunning, setIsTransitionRunning] = useState(false);

  const prevIsOpen = prevIsOpenRef.current;

  function onTransitionEnd() {
    if (isOpen) {
      onCloseTransitionEnd?.();
    } else {
      onOpenTransitionEnd?.();
    }
    setIsTransitionRunning(false);
  }

  useEffect(() => {
    ref.current?.addEventListener("transitionend", onTransitionEnd);
    return () => {
      ref.current?.removeEventListener("transitionend", onTransitionEnd);
    };
  }, [ref]);

  useEffect(() => {
    if (!isTransitionRunning && !isOpen && prevIsOpen) {
      onCloseTransitionStart?.();
      setIsTransitionRunning(true);
    }
    if (!isTransitionRunning && isOpen && !prevIsOpen) {
      onOpenTransitionStart?.();
      setIsTransitionRunning(true);
    }
  }, [isOpen, isTransitionRunning]);

  if (ref.current?.children?.length) {
    const height = Array.from(ref.current.children).reduce(
      (height, item) => height + item.offsetHeight,
      0
    );
    if (height) {
      heightRef.current = height;
    }
  }

  const height = toPx(heightRef.current);

  const closedStyles = isTransitionRunning
    ? { height: 0 }
    : prevIsOpen
    ? { height }
    : { display: "none", height: 0 };

  const openedStyles = isTransitionRunning
    ? { height }
    : !prevIsOpen
    ? { height: 0 }
    : {};

  const transitionDuration = Math.min(
    400,
    Math.max(100, heightRef.current / speed)
  );

  const style = {
    transitionDuration: `${transitionDuration}ms`,
    ...(isOpen ? openedStyles : closedStyles),
  };

  const shouldMount =
    isTransitionRunning || isOpen || prevIsOpen || !unmountOnClose;

  useEffect(() => {
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <div ref={ref} className={styles.root} style={style}>
      {shouldMount ? <div>{children}</div> : null}
    </div>
  );
}

export default Collapsible;
