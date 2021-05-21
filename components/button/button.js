import styles from "./button.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function Button({
  children,
  isDoublePadding,
  className,
  isActive,
  onClick,
  isDisabled,
  href,
}) {
  return (
    <a
      className={joinClassNames(
        typography.etaInter500,
        styles.root,
        isDoublePadding && styles.isDoublePadding,
        isActive && styles.isActive,
        isDisabled && styles.isDisabled,
        className
      )}
      onClick={onClick}
      name={children}
      href={href}
    >
      {children}
    </a>
  );
}
