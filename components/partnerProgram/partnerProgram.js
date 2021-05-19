import Button from "../button/button";
import styles from "./partnerProgram.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Icons from "../icons/icons";

export default function PartnerProgram() {
  return (
    <section className={styles.root}>
      <div className={joinClassNames(grid.root, styles.container)}>
        <p className={joinClassNames(typography.zeta500, styles.signalPhrase)}>
          Jederzeit nur einen Klick entfernt
        </p>
        <h2 className={joinClassNames(typography.beta500, styles.title)}>
          Partner werden
        </h2>
        <div className={styles.descriptionAndButtonContainer}>
          <p
            className={joinClassNames(typography.delta500, styles.description)}
          >
            Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
          <Button
            isActive={true}
            isDoublePadding={true}
            className={styles.button}
          >
            Zur Partnerprogramm-Seite
          </Button>
        </div>
        <Icons icon="appMenu" className={styles.appMenuIcon} />
        <Icons icon="appContainer" className={styles.applicationsMenu} />
        <div className={styles.appContainer}>
          <div className={styles.cell}>
            <Icons icon="dpaNews" className={styles.icon} />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-News
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaSelect" />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-Select
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaAgenda" />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-Agenda
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaVideoPortal" />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-Videoportal
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaShop" />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-Shop
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaPictureAlliance" />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa picture alliance
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="politics" />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              Polit-X
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="botTalk" />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              BotTalk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
