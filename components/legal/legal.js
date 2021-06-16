import styles from "./legal.module.css";
import Button from "../button/button";
import grid from "../../styles/grid.module.css";
import cn from "classnames";
import typography from "../../styles/typography.module.css";

import Link from "next/link";
export default function Legal({ type, className }) {
  return (
    <div className={cn(styles.root, grid.root)}>
      <div className={styles.buttonContainer}>
        <Link href={"/"}>
          <button className={cn(styles.button, typography.zeta500)}>
            ‹ Zurück zur Startseite
          </button>
        </Link>
      </div>
      <h1 className={cn(styles.title, typography.gamma500)}>
        {type === "imprint"
          ? "Impressum"
          : "Datenschutzerklärung der dpa Deutsche Presse-Agentur GmbH für die Website des dpa ID Partner-programms"}
      </h1>

      <p className={cn(styles.description, typography.epsilon400)}>
        Die Nutzung dieser Informationsseite kann mit der Verarbeitung von
        personenbezogenen Daten verbunden sein. Damit diese Verarbeitungen für
        Sie nachvollziehbar sind, möchten wir Ihnen mit den folgenden
        Informationen einen Überblick zu diesen Verarbeitungen verschaffen. Um
        eine faire Verarbeitung zu gewährleisten, möchten wir Sie außerdem über
        Ihre Rechte nach der Europäischen Datenschutz-Grundverordnung (DSGVO)
        und dem Bundesdatenschutzgesetz (BDSG) informieren. Verantwortlich für
        die Datenverarbeitung ist die dpa Deutsche Presse-Agentur GmbH,
        Mittelweg 38, 20148 Hamburg (nachfolgend auch als „wir“ oder „uns“
        bezeichnet).{" "}
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Bitte beachten Sie, dass diese Informationen zum Datenschutz nur für die
        Informationsseite des dpa ID Partnerprogramms gelten. Für die Nutzung
        des dpa-ID Singe-Sign-On-Service gelten gesonderte Informationen.
      </p>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        1. Allgemeine
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Angaben a) Kontakt Wenn Sie Fragen oder Anregungen zu diesen
        Informationen haben oder sich wegen der Geltendmachung Ihrer Rechte an
        uns wenden möchten, richten Sie Ihre Anfrage bitte an: dpa Deutsche
        Presse-Agentur GmbH{" "}
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Mittelweg 38
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        {" "}
        20148 Hamburg
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Telefon: +49 40 4113-0
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        E-Mail: info@dpa.com
      </p>
    </div>
  );
}
