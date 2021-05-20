import styles from "./button.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function Button({
  children,
  isDoublePadding,
  className,
  isActive,
  onClick,
  isDisabled,
}) {
  return (
    <a
      className={joinClassNames(
        styles.root,
        isDoublePadding && styles.isDoublePadding,
        isActive && styles.isActive,
        isDisabled && styles.isDisabled,
        className
      )}
      onClick={onClick}
      name={children}
    >
      {children}
    </a>
  );
}
