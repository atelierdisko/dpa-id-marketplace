import styles from "./signIn.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function SignIn({ className }) {
  return (
    <section className={joinClassNames(className, styles.root)}>
      <div className={joinClassNames(grid.root, styles.container)}>
        <p className={joinClassNames(typography.zeta500, styles.signalPhrase)}>
          dpa · ID selbst testen
        </p>
        <h2 className={joinClassNames(typography.gamma500, styles.title)}>
          Jetzt ausprobieren
        </h2>
        <p className={joinClassNames(typography.delta400, styles.description)}>
          Werfen Sie einen Bick auf die Anwendungen, die bereits Teil des dpa ·
          ID Partnerprogramms geworden sind!
        </p>
        <div className={styles.callToActionButton}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logo}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.6372 0.501709C12.1942 0.501709 10.8055 0.730003 9.50266 1.14892V26.8512C10.8055 27.2701 12.1942 27.4984 13.6372 27.4984C21.0933 27.4984 27.1372 21.4558 27.1372 13.9997C27.1372 6.5451 21.0933 0.501709 13.6372 0.501709ZM14.185 5.2002C18.7928 5.48425 22.4541 9.3223 22.4541 13.9997C22.4541 18.6778 18.7928 22.5159 14.185 22.8V5.2002ZM0.137207 13.9997C0.137207 9.91602 1.95393 6.25879 4.81956 3.78297V24.2172C1.95393 21.7414 0.137207 18.0841 0.137207 13.9997Z"
              fill="#0045F4"
            />
          </svg>
          <div className={styles.callToAction}>
            Für eine <strong>dpa</strong> · ID registrieren
          </div>
        </div>
      </div>
    </section>
  );
}
