import Button from "../button/button";
import styles from "./partnerProgram.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Icons from "../icons/icons";

export default function PartnerProgram({ id, className }) {
  return (
    <section className={joinClassNames(styles.root, className)} id={id}>
      <div className={joinClassNames(grid.root, styles.container)}>
        <p className={joinClassNames(typography.zeta500, styles.signalPhrase)}>
          Jederzeit nur einen Klick entfernt
        </p>
        <h2 className={joinClassNames(typography.beta500, styles.title)}>
          Jetzt Marktplatz- partner werden{" "}
        </h2>

        <p
          className={joinClassNames(
            typography.delta400,
            styles.firstDescription
          )}
        >
          Werden Sie Teil der Plattform und positionieren Sie Ihr Angebot so,
          dass es immer in Reichweite liegt.
        </p>
        <p
          className={joinClassNames(
            typography.epsilon400,
            styles.secondDescription
          )}
        >
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
        <Icons icon="appMenu" className={styles.appMenuIcon} />
        <div className={styles.triangleUp}>{}</div>
        <div className={styles.applicationsContainer}>
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
            <Icons
              icon="dpaPictureAlliance"
              className={joinClassNames(
                styles.icon,
                styles.pictureAllianceIcon
              )}
            />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              dpa picture alliance
            </div>
          </div>
          <div className={styles.cell}>
            <Icons
              icon="politics"
              className={joinClassNames(styles.icon, styles.politicsIcon)}
            />
            <div
              className={joinClassNames(styles.appName, typography.etaInter500)}
            >
              Polit-X
            </div>
          </div>
          <div className={styles.cell}>
            <Icons
              icon="botTalk"
              className={joinClassNames(styles.icon, styles.botTalkIcon)}
            />
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
