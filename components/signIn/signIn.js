import styles from "./signIn.module.css";
import typography from "../../styles/typography.module.css";
import Logo from "../logo/logo";
import grid from "../../styles/grid.module.css";
import cn from "classnames";

export default function SignIn({ className, id }) {
  return (
    <section
      className={cn(className, styles.root, grid.root)}
      id={id}
    >
      <p className={cn(typography.zeta500, styles.signalPhrase)}>
        Der Marktplatz wartet
      </p>
      <h2 className={cn(typography.gamma500, styles.title)}>
        Haben wir Ihr Interesse geweckt?
      </h2>
      <p className={cn(typography.delta400, styles.description)}>
        Jetzt kostenlos dpa ID registrieren und den Marktplatz entdecken!
      </p>
      <div className={styles.drawingsAndCallToAction}>
        <div className={styles.callToActionButton}>
          <Logo classname={styles.logo} withName={false} />
          <div className={typography.etaInter500}>dpa ID anlegen</div>
        </div>
        <img
          src={"./images/signUp-pattern.svg"}
          className={styles.pattern}
          alt={""}
        />
      </div>
      <div className={styles.callToActionButtonTabletAndMobile}>
        <Logo classname={styles.logo} withName={false} />
        <div className={typography.etaInter500}>dpa ID anlegen</div>
      </div>
      <img
        src={"./images/BG Image.svg"}
        className={styles.patternTabletAndMobile}
        alt={""}
      />
    </section>
  );
}
