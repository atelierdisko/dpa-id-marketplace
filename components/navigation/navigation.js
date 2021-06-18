import Link from "next/link";
import styles from "./navigation.module.css";
import grid from "../../styles/grid.module.css";
import typography from "../../styles/typography.module.css";
import Button from "../button/button";
import { FullLogoIcon, LogoIcon } from "../icon/icon";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";

export default function Navigation({
  className,
  displayNavigation,
  isLight,
  iconColor,
}) {
  const ref = useRef();
  const [activeIndex, setActiveIndex] = useState(null);
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
  function onScroll() {
    if (typeof document === "undefined" && ref.current) {
      return;
    }
    let index = 0;
    let prevTop = null;
    while (index < primaryNavigationLinks.length) {
      const { href } = primaryNavigationLinks[index];
      const el = document.querySelector(href);
      const { height: navHeight } = ref.current?.getBoundingClientRect();
      const currentTop = el.getBoundingClientRect().top - navHeight;
      if (currentTop > 0 && prevTop < 0) {
        setActiveIndex(Math.max(0, index - 1));
        return;
      }
      prevTop = currentTop;
      index++;
    }
    setActiveIndex(index > 0 && prevTop < 0 ? index - 1 : null);
  }

  useEffect(() => {
    if (typeof document === "undefined" && ref.current) {
      return;
    }
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [ref]);

  return (
    <nav
      ref={ref}
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
          <li key={index}>
            <Link href={link.href}>
              <a
                className={cn(
                  typography.zeta500,
                  styles.primaryLink,
                  index === activeIndex && styles.activeLink
                )}
              >
                {link.text}
              </a>
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
