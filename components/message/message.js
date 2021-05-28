import styles from "./message.module.css";
import Icons from "../icons/icons";
import { joinClassNames } from "../../utilities/componentsHelpers";
import typography from "../../styles/typography.module.css";

export default function Message({
  type,
  className,
  icon,
  id,
  onClick,
  disabled,
  onPhone,
  theme,
  themeColor,
  postingTime,
  content,
}) {
  return (
    <div
      className={joinClassNames(styles.root, className)}
      id={id}
      onClick={onClick}
    >
      <div
        className={joinClassNames(
          styles.typeContainer,
          onPhone && styles.typeContainerIsOnPhone
        )}
      >
        <Icons className={styles.typeLogo} icon={icon} />
        <div>{onPhone ? type : `Neue ${type} im`}</div>
        {onPhone && (
          <div
            className={styles.diamond}
            style={{ backgroundColor: themeColor }}
          />
        )}
        {onPhone && (
          <span className={styles.theme} style={{ color: themeColor }}>
            {theme}
          </span>
        )}
        {onPhone && <span>{postingTime}</span>}
      </div>
      <div
        className={joinClassNames(
          typography.etaInter500,
          styles.content,
          onPhone && styles.contentIsOnPhone
        )}
      >
        {content}
      </div>
      {!onPhone && (
        <div
          className={joinClassNames(
            styles.overlay,
            disabled && styles.isDisabled
          )}
        />
      )}
    </div>
  );
}
