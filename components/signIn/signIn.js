import styles from "./signIn.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Logo from "../logo/logo";

export default function SignIn({ className, id }) {
  return (
    <section className={joinClassNames(className, styles.root)} id={id}>
      <div className={joinClassNames(styles.container)}>
        <p className={joinClassNames(typography.zeta500, styles.signalPhrase)}>
          Der Marktplatz wartet
        </p>
        <h2 className={joinClassNames(typography.gamma500, styles.title)}>
          Haben wir Ihr Interesse geweckt?
        </h2>
        <p className={joinClassNames(typography.delta400, styles.description)}>
          Jetzt kostenlos dpa ID registrieren und den Marktplatz entdecken!
        </p>
      </div>
      <div className={styles.drawingsAndCallToAction}>
        <div className={styles.callToActionButton}>
          <Logo classname={styles.logo} withName={false} />
          <div className={typography.etaInter500}>dpa ID anlegen</div>
        </div>
        <img src={"./images/signUp-pattern.svg"} className={styles.pattern} />
      </div>
    </section>
  );
}
