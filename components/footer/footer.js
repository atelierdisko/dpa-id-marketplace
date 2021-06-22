import styles from "./footer.module.css";
import grid from "../../styles/grid.module.css";
import typography from "../../styles/typography.module.css";
import Link from "next/link";
import { FullLogoIcon } from "../icon/icon";
import cn from "classnames";

export default function Footer({ className }) {
  const navigationLinks = [
    {
      href: "https://www.dpa.com/de/portale/#faq",
      text: "FAQ",
    },
    {
      href: "https://sso.dpa-id.de/goto/imprint",
      text: "Impressum",
    },
    {
      href: "/datenshutz",
      text: "Datenschutz",
    },
  ];
  return (
    <footer className={cn(styles.root, grid.root, className)}>
      <div className={styles.logo}>
        <Link href={"#hero"}>
          <a>
            <FullLogoIcon />
          </a>
        </Link>
      </div>

      <ul className={cn(styles.legal, typography.etaInter500)}>
        {navigationLinks.map((link, index) => {
          if (/^http/.test(link.href)) {
            return (
              <li key={index}>
                <a href={link.href} target="_blank">
                  {link.text}
                </a>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link href={link.href}>
                  <a>{link.text}</a>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </footer>
  );
}

// <li key={index}>
//   <Link href={link.href}>
//     <a>{link.text}</a>
//   </Link>
// </li>
