import styles from "./signIn.module.css";
import typography from "../../styles/typography.module.css";
import Logo from "../logo/logo";
import grid from "../../styles/grid.module.css";
import cn from "classnames";

export default function SignIn() {
  return (
    <section className={cn(styles.root, grid.root)} id={"signIn"}>
      <p className={cn(typography.zeta500, styles.signalPhrase)}>
        Marktplatz für Nachrichtenservices
      </p>
      <h2 className={cn(typography.gamma500, styles.title)}>
        Haben wir Ihr Interesse geweckt?
      </h2>
      <p className={cn(typography.delta400, styles.description)}>
        Jetzt kostenfrei eine dpa ID anlegen und den dpa-Marketplace entdecken!
      </p>
      <div className={styles.drawingsAndCallToAction}>
        <img
          src={"./images/signIn/signUp-pattern.svg"}
          className={styles.pattern}
          alt={""}
        />
        <a
          className={styles.callToActionButton}
          href="https://sso.dpa-id.de/goto/register"
          target="_blank"
        >
          <Logo classname={styles.logo} withName={false} />
          <div className={typography.etaInter500}>dpa ID anlegen</div>
        </a>
      </div>
      <a className={styles.callToActionButtonTabletAndMobile} href={"/"}>
        <Logo classname={styles.logo} withName={false} />
        <div className={typography.etaInter500}>dpa ID anlegen</div>
      </a>
    </section>
  );
}
