import styles from "./functionalities.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import { useEffect, useState } from "react";
import Slider from "../slider/slider";
import Message from "../message/message";
import Logo from "../logo/logo";
import { useAnimation } from "framer-motion";

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
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls = useAnimation();

  const messagesToSendVariants = {
    hidden: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      scale: 1.5,
      transition: {
        duration: 0.3,
      },
    },
  };
  const incomingMessageVariants = {
    hidden: {
      scale: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("de-DE", { timeStyle: "short" })
  );
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
    const messageId = target.id;
    let message;
    if (messageId === "message1") message = message1;
    if (messageId === "message2") message = message2;
    if (messageId === "message3") message = message3;

    if (!message.disabled) {
      if (messageId === "message1") {
        controls1.start("visible").then(() => controls1.start("hidden"));
      }
      if (messageId === "message2") {
        // controls1.start("visible");
        controls2.start("visible").then(() => controls2.start("hidden"));
      }
      if (messageId === "message3") {
        // controls1.start("visible");
        controls3.start("visible").then(() => controls3.start("hidden"));
      }
      setPhoneMessages((prev) => [message, ...prev]);
    }

    if (hiddenMessages.length === 0) {
      if (messageId === "message1")
        setMessage1((prevMessage) => ({ ...prevMessage, disabled: true }));
      if (messageId === "message2")
        setMessage2((prevMessage) => ({ ...prevMessage, disabled: true }));
      if (messageId === "message3")
        setMessage3((prevMessage) => ({ ...prevMessage, disabled: true }));
    } else {
      const newMessage = hiddenMessages[0];
      if (messageId === "message1") setMessage1(newMessage);
      if (messageId === "message2") setMessage2(newMessage);
      if (messageId === "message3") setMessage3(newMessage);
      setHiddenMessages((prev) => prev.slice(1));
    }
  };

  useEffect(() => {
    controls.start("visible");
  }, [phoneMessages]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString("de-DE", { timeStyle: "short" }));
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

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
            controls={controls1}
            variants={messagesToSendVariants}
          />
          <Message
            type={message2.type}
            id="message2"
            icon={message2.icon}
            onClick={handleClickAnimation}
            className={styles.messageToSend}
            content={message2.content}
            disabled={message2.disabled}
            // controls={controls1}
            controls={controls2}
            variants={messagesToSendVariants}
          />
          <Message
            type={message3.type}
            id="message3"
            icon={message3.icon}
            onClick={handleClickAnimation}
            className={styles.messageToSend}
            content={message3.content}
            disabled={message3.disabled}
            // controls={controls1}
            controls={controls3}
            variants={messagesToSendVariants}
          />
        </div>

        <div className={styles.phoneContainer}>
          <div className={styles.phoneScreen} />
          <div className={styles.headerDpaApplication}>
            <div className={styles.Block1} />
            <div className={styles.Block2} />
            <div className={styles.Block3} />
            <div className={styles.applicationTime}>{time}</div>
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
                controls={controls}
                variants={incomingMessageVariants}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
