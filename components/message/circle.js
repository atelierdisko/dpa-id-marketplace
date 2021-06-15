import { motion, useAnimation } from "framer-motion";
import styles from "./message.module.css";
import cn from "classnames";

export default function Circle({ className }) {
  const variants = {
    initial: { x: 0, y: 0 },
    move1: {
      x: "15vw",
      transition: { duration: 2 },
    },
    move2: {
      y: "-70vh",
      transition: { duration: 2 },
    },
    move3: {
      x: "30vw",
      transition: { duration: 2 },
    },
    move4: {
      y: "-50vh",
      transition: { duration: 2 },
    },
  };
  const controls = useAnimation();
  controls
    .start("move1")
    .then(() =>
      controls
        .start("move2")
        .then(() => controls.start("move3").then(() => controls.start("move4")))
    );
  return (
    <motion.div
      variants={variants}
      inital="initial"
      animate={controls}
      className={cn(className, styles.circle)}
    />
  );
}
