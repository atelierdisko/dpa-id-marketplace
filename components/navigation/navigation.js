import Link from "next/link";
import styles from "./navigation.module.css";
import grid from "../../styles/grid.module.css";
import typography from "../../styles/typography.module.css";
import Button from "../button/button";
import { FullLogoIcon, LogoIcon } from "../icon/icon";
import cn from "classnames";

export default function Navigation({
  className,
  displayNavigation,
  isLight,
  iconColor,
  activeIndex = 0,
}) {
  const primaryNavigationLinks = [
    {
      href: "#applications",
      text: "Marktplatz",
    },
    {
      href: "#quotes",
      text: "Best Practises",
    },
    {
      href: "#functionalities",
      text: "Funktionalitäten",
    },
  ];

  return (
    <nav
      className={cn(
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
        {primaryNavigationLinks.map((link, index) => (
          <li
            className={cn(
              typography.zeta500,
              index === activeIndex && styles.activeLink
            )}
            key={index}
          >
            <Link href={link.href}>
              <a>{link.text}</a>
            </Link>
          </li>
        ))}

        <li className={typography.etaInter500}>
          <Link href="#signIn">
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
              <Button
                asButton={false}
                isBlue={true}
                className={styles.registerButton}
              >
                Jetzt dpa ID anlegen
              </Button>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
