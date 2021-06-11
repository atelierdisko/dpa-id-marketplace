import styles from "./footer.module.css";
import grid from "../../styles/grid.module.css";
import typography from "../../styles/typography.module.css";
import Link from "next/link";
import { FullLogoIcon } from "../icon/icon";
import cn from "classnames";

export default function Footer({ className }) {
  return (
    <footer className={cn(styles.root, grid.root, className)}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <a>
            <FullLogoIcon />
          </a>
        </Link>

        <div className={styles.partnerProgram}>Partnerprogramm</div>
      </div>

      <ul className={cn(styles.legal, typography.etaInter500)}>
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
    </footer>
  );
}
