import Link from "next/link";
import Logo from "../logo/logo";
import styles from "./navigation.module.css";
import grid from "../../styles/grid.module.css";
import typography from "../../styles/typography.module.css";
import { useMediaQuery } from "react-responsive";
import { customMedia } from "../../styles/cssExports";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Button from "../button/button";
import { FullLogoIcon, LogoIcon } from "../icon/icon";

export default function Navigation({
  className,
  displayNavigation,
  isLight,
  iconColor,
}) {
  return (
    <nav
      className={joinClassNames(
        styles.root,
        grid.root,
        isLight && styles.isLight,
        className
      )}
    >
      <Link href={"/"}>
        <a className={styles.logo}>
          <FullLogoIcon color={iconColor} />
        </a>
      </Link>

      <ul
        className={styles.list}
        style={!displayNavigation ? { display: "none" } : null}
      >
        <li className={typography.zeta500}>
          <Link href="/#applications" scroll={true}>
            <a>Marktplatz</a>
          </Link>
        </li>
        <li className={typography.zeta500}>
          <Link href="/#functionalities">
            <a>Best Practises</a>
          </Link>
        </li>
        <li className={typography.zeta500}>
          <Link href="/#partnerProgram">
            <a>Funktionalitäten</a>
          </Link>
        </li>
        <li className={typography.etaInter500}>
          <Link href="/#signIn">
            <a>
              <Button
                className={styles.signInButton}
                asButton={false}
                isActive={true}
              >
                <LogoIcon className={styles.signInButtonLogo} />
                Anmelden
              </Button>
            </a>
          </Link>
        </li>

        <li className={typography.etaInter500}>
          <Link href="/#createId">
            <a>
              <Button asButton={false} isBlue={true}>
                Jetzt dpa ID anlegen
              </Button>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
