import styles from "./button.module.css";
import typography from "../../styles/typography.module.css";
import cn from "classnames";

export default function Button({
  children,
  isDoublePadding,
  className,
  isActive,
  onClick,
  isDisabled,
  href,
  asButton,
  isBlue,
}) {
  return asButton ? (
    <button
      className={cn(
        typography.etaInter500,
        styles.root,
        isDoublePadding && styles.isDoublePadding,
        isActive && styles.isActive,
        isDisabled && styles.isDisabled,
        isBlue && styles.isBlue,
        className
      )}
      onClick={onClick}
      name={children}
      disabled={isDisabled}
    >
      {children}
    </button>
  ) : (
    <a
      className={cn(
        typography.etaInter500,
        styles.root,
        isDoublePadding && styles.isDoublePadding,
        isActive && styles.isActive,
        isDisabled && styles.isDisabled,
        isBlue && styles.isBlue,

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
