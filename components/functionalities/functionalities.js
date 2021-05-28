import styles from "./functionalities.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import { useEffect, useState } from "react";
import Slider from "../slider/slider";
import Message from "../message/message";
import Logo from "../logo/logo";

export default function Functionalities({
  functionalities,
  className,
  id,
  messages,
}) {
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
  const [message1, setMessage1] = useState({ ...messages[0], disabled: false });
  const [message2, setMessage2] = useState({ ...messages[1], disabled: false });
  const [message3, setMessage3] = useState({ ...messages[2], disabled: false });
  const [hiddenMessages, setHiddenMessages] = useState(messages.slice(7));
  const [phoneMessages, setPhoneMessages] = useState([
    messages[3],
    messages[4],
    messages[5],
    messages[6],
  ]);

  const handleClickAnimation = ({ target }) => {
    const message = target.id;

    if (message === "message1") setPhoneMessages((prev) => [message1, ...prev]);
    if (message === "message2") setPhoneMessages((prev) => [message2, ...prev]);
    if (message === "message3") setPhoneMessages((prev) => [message3, ...prev]);

    if (hiddenMessages.length === 0) {
      if (message === "message1")
        setMessage1((prevMessage) => ({ ...prevMessage, disabled: true }));
      if (message === "message2")
        setMessage2((prevMessage) => ({ ...prevMessage, disabled: true }));
      if (message === "message3")
        setMessage3((prevMessage) => ({ ...prevMessage, disabled: true }));
    } else {
      const newMessage = hiddenMessages[0];
      if (message === "message1") setMessage1(newMessage);
      if (message === "message2") setMessage2(newMessage);
      if (message === "message3") setMessage3(newMessage);
      setHiddenMessages((prev) => prev.slice(1));
    }
  };

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
          <Message
            type={message1.type}
            id="message1"
            icon={message1.icon}
            onClick={handleClickAnimation}
            className={styles.messageToSend}
            content={message1.content}
            disabled={message1.disabled}
          />
          <Message
            type={message2.type}
            id="message2"
            icon={message2.icon}
            onClick={handleClickAnimation}
            className={styles.messageToSend}
            content={message2.content}
            disabled={message2.disabled}
          />
          <Message
            type={message3.type}
            id="message3"
            icon={message3.icon}
            onClick={handleClickAnimation}
            className={styles.messageToSend}
            content={message3.content}
            disabled={message3.disabled}
          />
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
          <div className={styles.applicationMessageContainer}>
            {phoneMessages.map((message, index) => (
              <Message
                key={index}
                type={message.type}
                theme={message.theme}
                icon={message.icon}
                onPhone={true}
                postingTime={message.time}
                className={styles.messageOnPhone}
                colorTheme={message.colorTheme}
                content={message.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
