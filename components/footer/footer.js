import styles from "./footer.module.css";
import grid from "../../styles/grid.module.css";
import typography from "../../styles/typography.module.css";
import Logo from "../logo/logo";
import Link from "next/link";
import { joinClassNames } from "../../utilities/componentsHelpers";
import { useMediaQuery } from "react-responsive";
import { customMedia } from "../../styles/cssExports";

export default function Footer({ className }) {
  const isTablet = useMediaQuery({ query: customMedia["--tablet"] });
  const isMobile = useMediaQuery({ query: customMedia["--mobile"] });
  return (
    <footer
      className={joinClassNames(styles.root, grid.root, grid.margin, className)}
    >
      <div className={styles.logo}>
        <Logo />
        {(isTablet || isMobile) && (
          <div className={styles.partnerProgram}>Partnerprogramm</div>
        )}
      </div>

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
    </footer>
  );
}
