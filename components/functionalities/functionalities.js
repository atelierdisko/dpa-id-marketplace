import styles from "./functionalities.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import { useEffect, useState } from "react";
import Slider from "../slider/slider";
import Message from "../message/message";
import Logo from "../logo/logo";

export default function Functionalities({ functionalities, className, id }) {
  /* states and handler for slider */
  const [functionalityTitle, setFunctionalityTitle] = useState(
    functionalities[0].title
  );
  const [functionalityDescription, setFunctionalityDescription] = useState(
    functionalities[0].description
  );
  const [functionalityIndex, setFunctionalityIndex] = useState(0);

  useEffect(() => {
    setFunctionalityTitle(functionalities[functionalityIndex].title);
    setFunctionalityDescription(
      functionalities[functionalityIndex].description
    );
  }, [functionalityIndex]);

  const handleClickSlider = ({ target }) => {
    if (/^page/.test(target.id)) {
      const pageNumber = parseInt(target.id.match(/\d+/)[0]);
      setFunctionalityIndex(pageNumber);
      return;
    }
    if (functionalityIndex !== functionalities.length - 1) {
      setFunctionalityIndex((prevIndex) => prevIndex + 1);
    }
  };

  /* states and handler for animation*/
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [phoneMessages, setPhoneMessages] = useState("");

  const handleClickAnimation = ({ target }) => {};

  return (
    <section className={joinClassNames(styles.root, className)} id={id}>
      <img src="./images/features-pattern.svg" className={styles.pattern} />
      <div className={joinClassNames(styles.container, grid.root)}>
        <h2 className={joinClassNames(styles.title, typography.beta500)}>
          Features Ihrer dpa ID
        </h2>

        <Slider
          className={styles.slider}
          backAndForward={false}
          activePageColor="green"
          array={functionalities}
          activePage={functionalityIndex}
          onClick={handleClickSlider}
        />

        <h5
          className={joinClassNames(
            typography.delta500,
            styles.functionalityTitle
          )}
        >
          {functionalityTitle}
        </h5>
        <p
          className={joinClassNames(
            typography.delta400,
            styles.functionalityDescription
          )}
        >
          {functionalityDescription}
        </p>
        <p
          className={joinClassNames(
            typography.etaInter500,
            styles.chooseMessage
          )}
        >
          Aus Ihrer Anwendung direkt in die Taschen Ihre Nutzer – wählen Sie
          eine Nachricht:
        </p>
        <div className={styles.messageContainer}>
          <Message type="Meldung" id={message1}>
            Hier steht eine wichtige Meldung, lorem ipsum dolorum sum
          </Message>
          <Message type="Meldung" id={message2}>
            Niederlage für Özdemir: Hofreiter bleibt Grünen Franktionschef
          </Message>
          <Message type="Termin" id={message3}>
            Niederlage für Özdemir: Hofreiter bleibt Grünen Franktionschef
          </Message>
        </div>

        <div className={styles.phoneContainer}>
          <div className={styles.phoneScreen} />
          <div className={styles.headerDpaApplication}>
            <div className={styles.Block1} />
            <div className={styles.Block2} />
            <div className={styles.Block3} />
            <div className={styles.applicationTime}>13:00</div>
            <Logo whiteLogo={true} classname={styles.applicationLogo} />
          </div>
          <div className={styles.applicationTitle}>
            <span>HEUTE</span>
          </div>
          <div className={styles.applicationMessageContainer}>{}</div>
        </div>
      </div>
    </section>
  );
}
