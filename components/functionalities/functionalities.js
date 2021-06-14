import styles from "./functionalities.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { useEffect, useState } from "react";
import Message from "../message/message";
import Logo from "../logo/logo";
import { useAnimation } from "framer-motion";
import cn from "classnames";
import { useSwiper } from "../../hooks/useSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "../Carousel/navigation";
import MessageOnPhone from "../message/messageOnPhone";
import { motion } from "framer-motion";
import Button from "../Carousel/button";
import { Pagination } from "../Carousel/pagination";

export default function Functionalities({
  functionalities,
  className,
  id,
  messages,
}) {
  const {
    setSwiper,
    slideNext,
    onSlideChange,
    slideTo,
    currentSlideIndex,
  } = useSwiper();

  /* states and handler for animation*/
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const messagesToSendVariants = {
    normal: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    shrink: {
      scale: 0.85,
      transition: {
        duration: 0.3,
        ease: "easeOut",
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
        controls1.start("shrink").then(() => controls1.start("normal"));
      }
      if (messageId === "message2") {
        controls2.start("shrink").then(() => controls2.start("normal"));
      }
      if (messageId === "message3") {
        controls3.start("shrink").then(() => controls3.start("normal"));
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

  // useEffect(() => {
  //   controls.start("incoming").then(() => controls.set("onPhone"));
  // }, [phoneMessages]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString("de-DE", { timeStyle: "short" }));
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const controls = messages.map((message) => useAnimation());

  return (
    <section className={cn(styles.root, grid.root, className)} id={id}>
      <img
        src="./images/features-pattern.svg"
        className={styles.pattern}
        alt={""}
      />
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
        mousewheel={true}
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
        <motion.div className={styles.applicationMessageContainer}>
          {phoneMessages.map((message, index) => {
            // const controls = useAnimation();
            return (
              <MessageOnPhone
                key={index}
                type={message.type}
                theme={message.theme}
                icon={message.icon}
                postingTime={message.time}
                className={styles.messageOnPhone}
                colorTheme={message.colorTheme}
                content={message.content}
                controls={controls[index]}
                // variants={incomingMessageVariants}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
