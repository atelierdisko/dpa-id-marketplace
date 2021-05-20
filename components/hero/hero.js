import Button from "../button/button";
import { joinClassNames } from "../../utilities/componentsHelpers";
import styles from "./hero.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";

export default function Hero({ className }) {
  return (
    <section className={joinClassNames(className, styles.root, grid.root)}>
      <h1 className={joinClassNames(styles.title, typography.beta500)}>
        Willkommen in der Welt der dpa ID!{" "}
      </h1>
      <p className={joinClassNames(styles.description, typography.delta400)}>
        Die dpa ID ist Ihr persönlicher Schlüssel zum Marktplatz für
        Nachrichtenprofis und Kommunikationsteams. Auf diesem Markptlatz bieten
        wir Ihnen wertvolle Tools der dpa und unseren Partnern, die Ihnen Ihre
        tägliche Arbeit erleichtern. Registrieren Sie sich jetzt kostenlos und
        entdecken Sie neue Inhalte & Services.
      </p>
      <div className={styles.buttonContainer}>
        <Button isActive={true} isDoublePadding={true}>
          Jetzt dpa ID anlegen und Tools testen
        </Button>
      </div>
    </section>
  );
}
