import styles from "./footer.module.css";
import grid from "../../styles/grid.module.css";
import typography from "../../styles/typography.module.css";
import Logo from "../logo/logo";
import Link from "next/link";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function Footer({ className }) {
  return (
    <footer className={joinClassNames(styles.root, className)}>
      <div className={joinClassNames(styles.container, grid.root)}>
        <Logo classname={styles.logo} />
        <ul className={joinClassNames(styles.legal, typography.etaInter500)}>
          <li>
            <Link href="/impressum">
              <a>Impressum</a>
            </Link>
          </li>
          <li>
            <Link href="/datenshutz">
              <a>Datenschutz</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
