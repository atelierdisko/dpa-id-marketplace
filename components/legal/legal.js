import styles from "./legal.module.css";
import typography from "../../styles/typography.module.css";
import Button from "../button/button";
import grid from "../../styles/grid.module.css";
import cn from "classnames";

export default function Legal({ type, className }) {
  return (
    <div className={cn(styles.root, grid.root, grid.margin)}>
      <div className={styles.buttonContainer}>
        <Button isActive={false} className={styles.button} href="/">
          ← Zurück zur Startseite
        </Button>
      </div>
      <h1 className={cn(styles.title, typography.gamma500)}>
        {type === "imprint"
          ? "Impressum"
          : "Datenschutzerklärung der dpa Deutsche Presse-Agentur GmbH für die Website des dpa ID Partnerprogramms"}
      </h1>
      <div className={cn(styles.description, typography.epsilon500)}>
        <p>
          Die Nutzung dieser Informationsseite kann mit der Verarbeitung von
          personenbezogenen Daten verbunden sein. Damit diese Verarbeitungen für
          Sie nachvollziehbar sind, möchten wir Ihnen mit den folgenden
          Informationen einen Überblick zu diesen Verarbeitungen verschaffen. Um
          eine faire Verarbeitung zu gewährleisten, möchten wir Sie außerdem
          über Ihre Rechte nach der Europäischen Datenschutz-Grundverordnung
          (DSGVO) und dem Bundesdatenschutzgesetz (BDSG) informieren.
        </p>
        <p>
          Verantwortlich für die Datenverarbeitung ist die dpa Deutsche
          Presse-Agentur GmbH, Mittelweg 38, 20148 Hamburg (nachfolgend auch als
          „wir“ oder „uns“ bezeichnet).{" "}
        </p>
        <p>
          Bitte beachten Sie, dass diese Informationen zum Datenschutz nur für
          die Informationsseite des dpa ID Partnerprogramms gelten. Für die
          Nutzung des dpa-ID Singe-Sign-On-Service gelten gesonderte
          Informationen.
        </p>
        <h5>1. Allgemeine</h5>
        <p>
          Angaben a) Kontakt Wenn Sie Fragen oder Anregungen zu diesen
          Informationen haben oder sich wegen der Geltendmachung Ihrer Rechte an
          uns wenden möchten, richten Sie Ihre Anfrage bitte an: dpa Deutsche
          Presse-Agentur GmbH{" "}
        </p>
        <p>Mittelweg 38</p>
        <p> 20148 Hamburg</p>
        <p>Telefon: +49 40 4113-0</p>
        <p>E-Mail: info@dpa.com</p>
      </div>
    </div>
  );
}
