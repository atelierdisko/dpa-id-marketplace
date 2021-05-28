import styles from "./message.module.css";
import Icons from "../icons/icons";
import { joinClassNames } from "../../utilities/componentsHelpers";
import typography from "../../styles/typography.module.css";

Message.defaultProps = {
  onPhone: false,
  disabled: false,
};

export default function Message({
  type,
  className,
  icon,
  id,
  onClick,
  disabled,
  onPhone,
  theme,
  colorTheme,
  postingTime,
  content,
}) {
  return (
    <div className={joinClassNames(styles.root, className)} onClick={onClick}>
      <div
        className={joinClassNames(
          styles.typeContainer,
          onPhone && styles.typeContainerIsOnPhone
        )}
      >
        <Icons className={styles.typeLogo} icon={icon} />
        <div>{onPhone ? `Neue ${type} im` : type}</div>
        {onPhone && (
          <div
            className={styles.diamond}
            style={{ backgroundColor: colorTheme }}
          />
        )}
        {onPhone && (
          <span className={styles.theme} style={{ color: colorTheme }}>
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
          id={id}
          className={joinClassNames(
            styles.overlay,
            disabled && styles.isDisabled
          )}
        />
      )}
    </div>
  );
}
