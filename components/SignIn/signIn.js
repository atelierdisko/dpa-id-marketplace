import styles from "./signIn.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Logo from "../logo/logo";

export default function SignIn({ className }) {
  return (
    <section className={joinClassNames(className, styles.root)}>
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
          <div className={styles.callToAction}>dpa ID anlegen</div>
        </div>
      </div>
    </section>
  );
}
