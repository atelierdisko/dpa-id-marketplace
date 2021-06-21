import styles from "./functionalities.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { useEffect, useRef, useState } from "react";
import Message from "../message/message";
import Logo from "../logo/logo";
import cn from "classnames";
import { useSwiper } from "../../hooks/useSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MessageOnPhone from "../message/messageOnPhone";
import Button from "../carousel/button";
import { Pagination } from "../carousel/pagination";
import MessagePath from "./messagePath/messagePath";

export default function Functionalities({
  functionalities,
  className,
  id,
  messages,
}) {
  const { setSwiper, slideNext, onSlideChange, slideTo, currentSlideIndex } =
    useSwiper();

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

  const [messageQueue, setMessageQueue] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString("de-DE", { timeStyle: "short" }));
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const onMessageButtonClick = (index, message) => {
    setMessageQueue((prev) => [
      { index, startTime: Date.now(), message },
      ...prev,
    ]);
  };

  return (
    <section className={cn(styles.root, grid.root, className)} id={id}>
      <h2 className={cn(styles.title, typography.beta500)}>
        Features Ihrer dpa ID
      </h2>
      <div className={cn(styles.carouselNavigation)}>
        <Pagination
          count={functionalities.length}
          activeIndex={currentSlideIndex}
          slideTo={slideTo}
          color={"black"}
        />

        <Button
          onClick={() => slideNext()}
          className={cn(typography.zeta500, styles.nextButton)}
        >
          Nächste Funktionalität ›
        </Button>
      </div>
      <h5 className={cn(typography.delta500, styles.functionalityTitle)}>
        {functionalities[currentSlideIndex].title}
      </h5>
      <Swiper
        loop={true}
        keyboard={true}
        onSwiper={setSwiper}
        onSlideChange={onSlideChange}
        className={styles.carouselContainer}
      >
        {functionalities.map((functionality, index) => (
          <SwiperSlide key={index} className={styles.carouselSlide}>
            <div
              className={cn(
                typography.delta400,
                styles.functionalityDescription
              )}
            >
              {functionality.description}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className={cn(typography.etaInter500, styles.chooseMessage)}>
        Aus Ihrer Anwendung direkt in die Taschen Ihre Nutzer – wählen Sie eine
        Nachricht:
      </p>
      <div className={styles.messageContainer}>
        <Message
          type={message1.type}
          icon={message1.icon}
          className={styles.messageToSend}
          content={message1.content}
          isDisabled={message1.disabled}
          setPhoneMessages={setPhoneMessages}
          setHiddenMessages={setHiddenMessages}
          message={message1}
          setMessage={setMessage1}
          hiddenMessages={hiddenMessages}
          onClick={() => onMessageButtonClick(0, message1)}
        />
        <Message
          type={message2.type}
          icon={message2.icon}
          className={styles.messageToSend}
          content={message2.content}
          isDisabled={message2.disabled}
          setPhoneMessages={setPhoneMessages}
          setHiddenMessages={setHiddenMessages}
          message={message2}
          setMessage={setMessage2}
          hiddenMessages={hiddenMessages}
          onClick={() => onMessageButtonClick(1, message2)}
        />
        <Message
          type={message3.type}
          icon={message3.icon}
          isDisabled={message3.disabled}
          className={styles.messageToSend}
          content={message3.content}
          setPhoneMessages={setPhoneMessages}
          setHiddenMessages={setHiddenMessages}
          message={message3}
          setMessage={setMessage3}
          hiddenMessages={hiddenMessages}
          onClick={() => onMessageButtonClick(2, message3)}
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
          {phoneMessages.map((message, index, array) => (
            <MessageOnPhone
              key={index}
              type={message.type}
              theme={message.theme}
              icon={message.icon}
              postingTime={message.time}
              className={styles.messageOnPhone}
              colorTheme={message.colorTheme}
              content={message.content}
              animate={message.animate && index === 0}
              count={array.length}
            />
          ))}
        </div>
      </div>
      <MessagePath
        messageQueue={messageQueue}
        setMessageQueue={setMessageQueue}
        setPhoneMessages={setPhoneMessages}
      />
    </section>
  );
}
