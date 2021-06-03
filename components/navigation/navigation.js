import Link from "next/link";
import Logo from "../logo/logo";
import styles from "./navigation.module.css";
import grid from "../../styles/grid.module.css";
import typography from "../../styles/typography.module.css";
import { useMediaQuery } from "react-responsive";
import { customMedia } from "../../styles/cssExports";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Button from "../button/button";

export default function Navigation({ className, displayNavigation, isLight }) {
  const isDesktop = useMediaQuery({ query: customMedia["--desktop"] });
  const isTablet = useMediaQuery({ query: customMedia["--tablet"] });
  const isMobile = useMediaQuery({ query: customMedia["--mobile"] });
  return (
    <nav
      className={joinClassNames(
        styles.root,
        grid.root,
        grid.margin,
        isLight && styles.isLight,
        className
      )}
    >
      <Logo classname={styles.logo} isDark={isLight} />

      <ul
        className={styles.list}
        style={!displayNavigation ? { display: "none" } : null}
      >
        {isDesktop && (
          <li className={typography.zeta500}>
            <Link href="/#applications" scroll={true}>
              <a>Anwendungen</a>
            </Link>
          </li>
        )}
        {isDesktop && (
          <li className={typography.zeta500}>
            <Link href="/#functionalities">
              <a>Funktionalitäten</a>
            </Link>
          </li>
        )}
        {isDesktop && (
          <li className={typography.zeta500}>
            <Link href="/#partnerProgram">
              <a>Partnerprogramm</a>
            </Link>
          </li>
        )}
        {!isMobile && (
          <li className={typography.etaInter500}>
            <Link href="/#signIn">
              <Button className={styles.signIn}>
                <Logo classname={styles.logoAnmelden} withName={false} />
                Anmelden
              </Button>
            </Link>
          </li>
        )}

        <li className={typography.etaInter500}>
          <Link href="/#createId">
            <Button isActive={true}>Jetzt dpa ID anlegen</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
