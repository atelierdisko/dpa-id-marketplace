import styles from "./message.module.css";
import Icons from "../icons/icons";
import { joinClassNames } from "../../utilities/componentsHelpers";
import typography from "../../styles/typography.module.css";

export default function Message({ type, children, className, id }) {
  return (
    <div className={styles.root} id={id}>
      <div className={styles.typeContainer}>
        <Icons className={styles.typeLogo} icon="dpaNewsSmall" />
        <div>{type}</div>
      </div>
      <div className={joinClassNames(typography.etaInter500, styles.content)}>
        {children}
      </div>
    </div>
  );
}
