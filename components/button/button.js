import styles from "./button.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function Button({
  children,
  isDoublePadding,
  className,
  isActive,
  onClick,
}) {
  return (
    <a
      className={joinClassNames(
        className,
        styles.root,
        isDoublePadding && styles.isDoublePadding,
        isActive && styles.isActive
      )}
      onClick={onClick}
      name={children}
    >
      {children}
    </a>
  );
}
