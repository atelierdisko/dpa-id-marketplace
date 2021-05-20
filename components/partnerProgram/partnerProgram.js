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
          Jetzt Marktplatz- partner werden{" "}
        </h2>
        <div className={styles.descriptionAndButtonContainer}>
          <p
            className={joinClassNames(typography.delta500, styles.description)}
          >
            Werden Sie Teil der Plattform und positionieren Sie Ihr Angebot so,
            dass es immer in Reichweite liegt.
          </p>
          <p className={joinClassNames(typography.epsilon400, styles.details)}>
            Nach der initialen und sehr einfachen technischen Integration
            profitieren dpa ID Partner von den Leistungen des dpa ID
            Partnerprogramms, das wir kontinuierlich weiterentwickeln.
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
            <Icons icon="dpaSelect" className={styles.icon} />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-Select
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaAgenda" className={styles.icon} />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-Agenda
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaVideoPortal" className={styles.icon} />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-Videoportal
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaShop" className={styles.icon} />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa-Shop
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="dpaPictureAlliance" className={styles.icon} />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa picture alliance
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="politics" className={styles.icon} />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              Polit-X
            </div>
          </div>
          <div className={styles.cell}>
            <Icons icon="botTalk" className={styles.icon} />
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
