import Button from "../button/button";
import styles from "./hero.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import cn from "classnames";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function Hero({ className }) {
  const speed = 0.15;
  const startY = -100;
  const stopY = -200;
  const { scrollYProgress } = useViewportScroll();

  const y = useTransform(scrollYProgress, [0.02, speed], [startY, stopY], {
    clamp: true,
  });
  return (
    <section className={cn(className, styles.root, grid.root)}>
      <h1 className={cn(styles.title, typography.beta500)}>
        Willkommen auf dem dpa-Marktplatz!
      </h1>
      <p className={cn(styles.description, typography.delta400)}>
        dpa bietet einen Marktplatz für Nachrichtenprofis und
        Kommunikationsteams. Auf diesem Marktplatz ermöglichen wir Ihnen einen
        einfachen und schnellen Zugang zu wertvollen Tools der dpa und unserer
        Partner, die Ihnen Ihre tägliche Arbeit erleichtern. Die dpa ID ist Ihr
        persönlicher Schlüssel zu unserem Marktplatz. Registrieren Sie sich
        jetzt kostenfrei und entdecken neue Produkte und Services.
      </p>

      <Button isDoublePadding={true} className={styles.button}>
        Jetzt dpa ID anlegen und Tools testen
      </Button>
      <img
        src={"./images/hero-laptop.png"}
        className={styles.laptopImage}
        alt={""}
      />
      <motion.div className={styles.appMenu} style={{ y }}>
        {/*{" "}*/}
        <motion.img
          animate={{ y: startY }}
          transition={{ duration: 1 }}
          src={"./images/appswitcher_trans.png"}
          alt={""}
        />
      </motion.div>
    </section>
  );
}
