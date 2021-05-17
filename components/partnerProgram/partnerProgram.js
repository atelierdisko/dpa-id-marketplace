import Button from "../button/button";
import styles from "./partnerProgram.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function PartnerProgram() {
  return (
    <section className={styles.root}>
      <div className={joinClassNames(grid.root, styles.container)}>
        <p className={joinClassNames(typography.zeta500, styles.signalPhrase)}>
          Jederzeit nur einen Klick entfernt
        </p>
        <h2 className={joinClassNames(typography.beta500, styles.title)}>
          Partner werden
        </h2>
        <p className={joinClassNames(typography.delta500, styles.description)}>
          Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
        <Button
          isActive={true}
          isDoublePadding={true}
          className={styles.button}
        >
          Zur Partnerprogramm-Seite
        </Button>
        <div className={styles.applicationsMenu}></div>
      </div>
    </section>
  );
}
