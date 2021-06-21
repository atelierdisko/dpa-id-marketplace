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

export default function Hero({ className, id }) {
  const isDesktopXL = useMediaQuery({ query: customMedia["--desktop-xl"] });
  const isDesktop = useMediaQuery({ query: customMedia["--desktop"] });
  const isTablet = useMediaQuery({ query: customMedia["--tablet"] });
  const isMobile = useMediaQuery({ query: customMedia["--mobile"] });

  const { scrollYProgress } = useViewportScroll();
  console.log(scrollYProgress);

  let startScroll = 0.02;
  let stopScroll = 0.15;
  let startY = -100;
  let stopY = -200;
  if (isTablet) {
    startScroll = 0.11;
    stopScroll = 0.17;
    startY = -100;
    stopY = -200;
  }
  if (isMobile) {
    startScroll = 0.96;
    stopScroll = 0.16;
    startY = -60;
    stopY = -160;
  }

  const y = useTransform(
    scrollYProgress,
    [startScroll, stopScroll],
    [startY, stopY],
    {
      clamp: true,
    }
  );
  const { ref, inView, entry } = useInView({
    delay: 100,
    trackVisibility: true,
  });

  useEffect(() => {
    // if (typeof document === "undefined") return;
    // else {
    //   const el = document.querySelector("#appMenuImg").getBoundingClientRect();
    //   console.log(el);
    // }
    if (entry) console.log(entry.intersectionRatio);
  }, [entry]);
  const controls = useAnimation();
  const variants = {
    initial: {
      y: 0,
    },
    final: {
      y: startY,
      transition: {
        duration: 1,
      },
    },
  };
  useEffect(() => {
    if (inView) {
      // if (scrollYProgress >= startY) {
      controls.start("final");
    }
  }, [inView, entry]);
  return (
    <section className={cn(className, styles.root, grid.root)} id={id}>
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
      <motion.div
        className={styles.appMenu}
        // style={{ y }}
      >
        {/*{" "}*/}
        <motion.img
          // ref={ref}
          id="appMenuImg"
          initial="initial"
          animate={controls}
          variants={variants}
          src={"./images/appswitcher_trans.png"}
          alt={""}
        />
      </motion.div>
      <div ref={ref} />
    </section>
  );
}
