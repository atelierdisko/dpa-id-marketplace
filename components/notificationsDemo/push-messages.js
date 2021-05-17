import ready from "document-ready";
import anime from "animejs/lib/anime.es.js";
import { customMedia } from "../../../customMedia";
import { customProperties } from "../../../customProperties";

const { "--tablet": tablet, "--mobile": mobile } = customMedia;
const { "--spacing-unit": spacingUnit } = customProperties;
const spacing = parseInt(spacingUnit, 10);

ready(() => {
  /* Display time in phone mockup */
  (() => {
    const classes = {
      time: "mockup-header__time",
    };
    const displayTime = () => {
      const time = new Date()
        .toLocaleTimeString("de-DE", { timeStyle: "short" })
        .substr(0, 5);
      document.querySelector(`.${classes.time}`).textContent = time;
    };
    setInterval(displayTime, 1000);
    displayTime();
  })();

  /* Fetch & render news */
  (async () => {
    const classes = {
      svg: "intro-phone__path",
      path: "intro-phone-path__path-element",
      message: "intro-phone-input-messages__message",
      messageContainer: "intro-message__container",
      mockup: "intro-phone__mockup-wrapper",
      mockupImg: "intro-phone__mockup-img",
      mockupMessages: "mockup__messages",
      wrapper: "intro__phone",
      circle: "mockup__circle",
    };
    const modifier = {
      disabled: "disabled",
      messageIsSending: "sending",
      tablet: "tablet",
      mobile: "mobile",
    };

    let messages = Array.from(
      document.querySelectorAll(`.${classes.message}`)
    ).map((el) => ({ el }));

    const svg = document.querySelector(`.${classes.svg}`);
    const mockup = document.querySelector(`.${classes.mockup}`);
    const mockupImg = document.querySelector(`.${classes.mockupImg}`);
    const mockupMessages = document.querySelector(`.${classes.mockupMessages}`);
    const wrapper = document.querySelector(`.${classes.wrapper}`);

    const renderPaths = (remove = true) => {
      const isTablet = window.matchMedia(tablet).matches;
      const isMobile = window.matchMedia(mobile).matches;

      const offsetMockup = 11 * spacing;

      if (isMobile) {
        const scale = (window.innerWidth - 4 * spacing) / mockupImg.width;
        const clampedScale = Math.min(1.2, scale);

        mockup.style.left = scale > clampedScale ? "-20px" : "";
        mockup.style["margin-left"] = scale > clampedScale ? "auto" : "";
        mockup.style["transform-origin"] =
          scale > clampedScale ? "center bottom" : "";

        mockup.style.transform = `scale(${clampedScale})`;
        mockup.style["margin-top"] = `${
          (clampedScale - 1) * mockup.clientHeight + offsetMockup
        }px`;
      } else {
        mockup.style.transform = "";
        mockup.style["margin-top"] = "";
      }

      const paths = Array.from(svg.querySelectorAll(`.${classes.path}`));
      paths.forEach((el) => {
        if (remove) {
          el.remove();
        } else {
          el.style.display = "none";
        }
      });

      if (isTablet) {
        messages.forEach((messageItem) => {
          const { el } = messageItem;

          const offset = 180;
          const height = el.offsetTop + el.offsetHeight + offset;
          const top = 170;

          const messageRightBorder = el.offsetLeft + el.offsetWidth;
          const gap =
            mockup.getBoundingClientRect().left - messageRightBorder + 60;
          const factor = gap > 200 ? 0.33 : 0.5;
          const x =
            gap * factor +
            messageRightBorder -
            svg.getBoundingClientRect().left;
          const path = `<path class="${classes.path} ${classes.path}--${
            modifier.tablet
          }"
            d="M2 ${height}H${x - 48}C${x - 21} ${height} ${x} ${
            height - 22
          } ${x} ${height - 44}V${top + 50}C${x} ${top + 23}
            ${x + 21} ${top + 2} ${x + 48} ${top + 2}H1143C1169.51 ${
            top + 2
          } 1191 ${top + 23} 1191 ${top + 50}V${top + 100}"
            stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>`;
          svg.insertAdjacentHTML("beforeend", path);
        });
      }
      if (isMobile) {
        const messageRect = messages[0].el.getBoundingClientRect();
        const messageParentRect = messages[0].el.offsetParent.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();
        const y1 = messageParentRect.top + messageRect.height - wrapperRect.top;
        const y2 = y1 + messageParentRect.height + offsetMockup;
        const x = window.innerWidth / 2;

        const pathMobile = `<path class="${classes.path} ${classes.path}--${modifier.mobile}"
          d="M${x} ${y1}, L${x} ${y2}"
          stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>`;
        svg.insertAdjacentHTML("beforeend", pathMobile);
      }
    };

    const iconByGenre = (genre) => {
      const icons = {
        Meldung: "/assets/img/app/dpa-iconset/128_select_transparent-2.png",
        Event: "/assets/img/app/dpa-iconset/128_agenda_transparent.png",
      };
      return genre in icons ? icons[genre] : icons.Meldung;
    };

    const renderBroadcastMessage = (message, newsItem) => {
      const { el } = message;
      const { genre = "Meldung", headline } = newsItem;

      const messageContainer = el.querySelector(`.${classes.messageContainer}`);

      const template = `
        <div class="intro-message__header intro-message-header">
          <img class="intro-message-header__icon" src="${iconByGenre(genre)}">
          <span class="t--iota">${genre}</span>
        </div>
        <div class="intro-message__text t--theta">${headline}</div>`;
      while (messageContainer.firstChild) {
        messageContainer.firstChild.remove();
      }
      messageContainer.insertAdjacentHTML("beforeend", template);
    };

    const renderReceivedMessage = (newsItem) => {
      const {
        genre = "Meldung",
        headline,
        category = "Politik",
        version_created: versionCreated,
      } = newsItem;

      const headerTexts = {
        Meldung: "Neue Meldung im",
        Event: "Neuer Termin im",
        Zitat: "Neues Zitat im",
        Extra: "Neue Meldung im",
        Überblick: "Neuer Überblick im",
        Zusammenfassung: "Neue Zusammenfassung im",
        Vorausmeldung: "Neue Zusammenfassung im",
      };

      const headerText =
        genre in headerTexts ? headerTexts[genre] : headerTexts.Meldung;

      const castedDate = new Date(versionCreated);
      const timeString = castedDate
        .toLocaleTimeString("de-DE", { timeStyle: "short" })
        .substr(0, 5);

      const templates = {
        Meldung: () => `
          <div class="mockup-messages__item mockup-message">
            <div class="mockup-message__header mockup-message-header">
              <img class="mockup-message-header__icon" src="${iconByGenre(
                genre
              )}">
              <div class="mockup-message-header__channel mockup-message-header-channel t--kappa">
                <span class="mockup-message-header-channel__text">${headerText}</span>
                <span class="
                  mockup-message-header-channel__category
                  mockup-message-header-channel__category--${category.toLowerCase()}
                ">${category}</span>
              </div>
              <div class="mockup-message-header__time t--kappa">${timeString}</div>
            </div>
            <div class="mockup-message__content t--theta">
              <span>${headline}</span>
            </div>
          </div>
        `,
        Event: () => {
          const formattedDate = [
            { weekday: "short" },
            { day: "numeric" },
            { month: "short", year: "2-digit" },
          ].map((options) => castedDate.toLocaleDateString("de-DE", options));
          return `
            <div class="mockup-messages__item mockup-message">
              <div class="mockup-message__header mockup-message-header">
                <img class="mockup-message-header__icon" src="${iconByGenre(
                  genre
                )}">
                <div class="mockup-message-header__channel mockup-message-header-channel t--kappa">
                  <span class="mockup-message-header-channel__text">${headerText}</span>
                  <span class="
                    mockup-message-header-channel__category
                    mockup-message-header-channel__category--${category.toLowerCase()}
                  ">${category}</span>
                </div>
                <div class="mockup-message-header__time t--kappa">${timeString}</div>
              </div>
              <div class="mockup-message__content mockup-message-content t--theta">
                <div class="mockup-message-content__date mockup-message-content-date">
                  <div class="mockup-message-content-date__weekday t--kappa">${
                    formattedDate[0]
                  }</div>
                  <div class="mockup-message-content-date__day">${
                    formattedDate[1]
                  }</div>
                  <div class="mockup-message-content-date__my t--kappa">${formattedDate[2].replace(
                    /(\.?\s+)/,
                    " '"
                  )}</div>
                </div>
                <div class="mockup-message-content__text">
                  <div class="mockup-message-content__time t--kappa">${timeString}</div>
                  <span>${headline}</span>
                </div>
              </div>
            </div>
          `;
        },
      };
      const templateElement = document.createElement("template");
      const template =
        genre in templates ? templates[genre] : templates.Meldung;
      const templateContent = template().trim();
      templateElement.innerHTML = templateContent;
      return templateElement.content.firstChild;
    };

    window.addEventListener("resize", renderPaths);
    renderPaths();

    const handleNewsData = (news) => {
      const itemsInMockup = 5;
      const pushedNews = news.slice(-itemsInMockup);
      const availableNews = news.slice(0, -itemsInMockup);

      messages = messages.map((message, index) => {
        const newsItem = availableNews.pop();
        renderBroadcastMessage(message, newsItem);
        return { ...message, newsItem };
      });

      pushedNews.forEach((newsItem) => {
        const receivedMessage = renderReceivedMessage(newsItem);
        mockupMessages.prepend(receivedMessage);
      });

      messages.forEach((broadcastMessage, index) => {
        const { el } = broadcastMessage;
        const message = broadcastMessage;
        el.addEventListener("click", () => {
          const { disabled = false, isSending = false } = message;
          if (isSending || disabled) {
            return false;
          }

          const sendItem = message.newsItem;
          message.isSending = true;

          const isTablet = window.matchMedia(tablet).matches;
          const isMobile = window.matchMedia(mobile).matches;

          const circle = document.createElement("div");
          circle.classList.add(classes.circle);
          svg.parentElement.appendChild(circle);

          let animePathEl = document.querySelector(`.${classes.svg} path`);
          if (isTablet) {
            animePathEl = document.querySelectorAll(
              `.${classes.svg} .${classes.path}--${modifier.tablet}`
            )[index];
          }
          if (isMobile) {
            animePathEl = document.querySelector(
              `.${classes.svg} .${classes.path}--${modifier.mobile}`
            );
          }
          const animationPath = anime.path(animePathEl);

          const {
            left: messageX,
            top: messageY,
            width: messageWidth,
            height: messageHeight,
          } = el.getBoundingClientRect();

          const { left: svgX } = svg.getBoundingClientRect();
          const { top: lineY } = svg.lastElementChild.getBoundingClientRect();
          const pathLength = animationPath().totalLength;
          const pathOffset = isMobile
            ? messageY + messageHeight - lineY
            : messageX + messageWidth - svgX;
          const progress = pathOffset / pathLength;
          let timeFactor = 1;
          timeFactor = isTablet ? 1.2 : timeFactor;
          timeFactor = isMobile ? 0.3 : timeFactor;
          const duration = timeFactor * 1400;

          const receivedMessage = renderReceivedMessage(sendItem);
          const pushMessageTimeline = anime
            .timeline({
              duration: 300,
              autoplay: false,
            })
            .add({
              targets: receivedMessage,
              opacity: [0, 1],
              scale: [0.8, 1],
              marginBottom: "24px",
              marginTop: "14px",
              easing: "easeOutCubic",
            });

          receivedMessage.style.postion = "abolute";
          receivedMessage.style.opacity = 0;

          mockupMessages.prepend(receivedMessage);

          const mockupStyle = window.getComputedStyle(mockup);
          let scale = parseFloat(
            mockupStyle.getPropertyValue("transform").match(/\d+\.?\d*/)
          );
          scale = !Number.isNaN(scale) ? scale : 1;

          anime.set(receivedMessage, {
            marginTop: 0,
            marginBottom: `${
              -receivedMessage.getBoundingClientRect().height *
              (1 / (scale * 0.8))
            }px`,
          });

          receivedMessage.style.postion = "relative";

          el.classList.add(`${classes.message}--${modifier.messageIsSending}`);

          anime({
            targets: circle,
            translateX: animationPath("x"),
            translateY: animationPath("y"),
            easing: "linear",
            delay: -progress * duration,
            duration,
            progress,
            complete: () => {
              circle.parentNode.removeChild(circle);
              message.isSending = false;
              if (availableNews.length > 0) {
                message.newsItem = availableNews.pop();
              } else {
                message.disabled = true;
                el.classList.add(`${classes.message}--${modifier.disabled}`);
              }
              pushMessageTimeline.play();
              el.classList.remove(
                `${classes.message}--${modifier.messageIsSending}`
              );
              renderBroadcastMessage(message, message.newsItem);
              renderPaths();
            },
          });
        });
      });
      renderPaths();
    };

    try {
      const response = await fetch("/select-api");
      if (response.status >= 200 && response.status < 300) {
        const json = await response.json();
        handleNewsData(json);
      } else {
        const json = await response.json();
        throw new Error(json.message);
      }
    } catch (error) {
      console.error(error);
    }
  })();
});
