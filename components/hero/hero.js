import Button from "../button/button";
import styles from "./hero.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import cn from "classnames";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { customMedia } from "../../styles/cssExports";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Hero({}) {
  const isTablet = useMediaQuery({ query: customMedia["--tablet"] });
  const isMobile = useMediaQuery({ query: customMedia["--mobile"] });

  const { scrollYProgress } = useViewportScroll();

  let startScroll = 0;
  let stopScroll = 0.16;
  let startY = 0;
  let stopY = -200;
  const { ref, inView } = useInView({});
  const controls = useAnimation();
  let variants = {
    initial: {
      y: 0,
    },
    final: {
      y: -100,
      transition: {
        duration: 1.5,
      },
    },
  };
  if (isTablet) {
    startScroll = 0.11;
    stopScroll = 0.2;
  }

  if (isMobile) {
    startScroll = 0.1;
    stopScroll = 0.3;
    variants.final.y = -70;
  }

  const y = useTransform(
    scrollYProgress,
    [startScroll, stopScroll],
    [startY, stopY],
    {
      clamp: true,
    }
  );
  useEffect(() => {
    if (inView) {
      controls.start("final");
    }
  }, [inView]);

  return (
    <section className={cn(styles.root, grid.root)} id={"hero"}>
      <h1 className={cn(styles.title, typography.beta500)}>
        Willkommen auf dem Marktplatz der dpa!
      </h1>
      <p className={cn(styles.description, typography.delta400)}>
        dpa bietet einen Marktplatz für Nachrichtenprofis und
        Kommunikationsteams. Auf diesem Marktplatz ermöglichen wir Ihnen einen
        einfachen und schnellen Zugang zu wertvollen Tools der dpa und unserer
        Partner, die Ihnen Ihre tägliche Arbeit erleichtern. Die dpa ID ist Ihr
        persönlicher Schlüssel zu unserem Marktplatz. Registrieren Sie sich
        jetzt kostenfrei und entdecken neue Produkte und Services.
      </p>

      <Button
        isDoublePadding={true}
        className={styles.button}
        asButton={false}
        href="https://sso.dpa-id.de/goto/register"
      >
        Jetzt dpa ID anlegen und Tools testen
      </Button>
      <img
        src={"./images/hero-laptop.png"}
        className={styles.laptopImage}
        alt={""}
      />
      <motion.div
        className={styles.appMenuContainer}
        ref={ref}
        initial="initial"
        animate={controls}
        variants={variants}
      >
        <motion.img
          className={styles.appMenu}
          id="appMenuImg"
          style={{ y }}
          src={"./images/appswitcher_trans.png"}
          alt={""}
        />
      </motion.div>
    </section>
  );
}
