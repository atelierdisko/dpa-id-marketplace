import React, { useEffect, useRef, useState } from "react";
import styles from "./messagePath.module.css";
import { customMedia } from "../../../styles/cssExports";

function PatternDesktop({ width, phoneWidth, offsetVerticalLine, bottom }) {
  return (
    <g
      className={styles.svgGroupPatternDesktop}
      transform={`translate(${width - 1722 + phoneWidth + offsetVerticalLine},${
        bottom - 1677
      })`}
    >
      <path
        opacity="0.1"
        d="M812.5 1413V1397C812.5 1370.49 833.99 1349 860.5 1349L1589 1349"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.2"
        d="M812.5 1515V1499C812.5 1472.49 833.99 1451 860.5 1451H1589"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.08"
        d="M812.5 1580V1563.45C812.5 1536.94 791.01 1515.45 764.5 1515.45H374C347.49 1515.45 326 1493.96 326 1467.45V868"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.1"
        d="M812.5 1476V1459.45C812.5 1432.94 791.01 1411.45 764.5 1411.45H497C470.49 1411.45 449 1389.96 449 1363.45V789"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.05"
        d="M813 1348V1331.45C813 1304.94 791.51 1283.45 765 1283.45H601C574.49 1283.45 553 1261.96 553 1235.45V661"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.03"
        d="M813 1220V1203.45C813 1176.94 791.51 1155.45 765 1155.45H716C689.49 1155.45 668 1133.96 668 1107.45V533"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.05"
        d="M1237 708V691.453C1237 664.943 1215.51 643.453 1189 643.453H1140C1113.49 643.453 1092 621.963 1092 595.453V21"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.1"
        d="M1381 1044V1027.45C1381 1000.94 1359.51 979.453 1333 979.453H1046C1019.49 979.453 998 957.963 998 931.453V357"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.1"
        d="M1381 916V899.453C1381 872.943 1359.51 851.453 1333 851.453H1284C1257.49 851.453 1236 829.963 1236 803.453V229"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.1"
        d="M1381 727V706.883C1381 680.373 1402.49 658.883 1429 658.883H1486C1512.51 658.883 1534 637.392 1534 610.883V2"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.1"
        d="M1381 1007V986.883C1381 960.373 1402.49 938.883 1429 938.883H1486C1512.51 938.883 1534 917.392 1534 890.883V282"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.03"
        d="M450 844V827.453C450 800.943 428.51 779.453 402 779.453H353C326.49 779.453 305 757.963 305 731.453V157"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.05"
        d="M997 916V899.453C997 872.943 975.51 851.453 949 851.453H900C873.49 851.453 852 829.963 852 803.453V229"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.05"
        d="M325 1476V1459.45C325 1432.94 303.51 1411.45 277 1411.45H50C23.4903 1411.45 2 1389.96 2 1363.45V789"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.05"
        d="M325 1348V1331.45C325 1304.94 303.51 1283.45 277 1283.45H113C86.4903 1283.45 65 1261.96 65 1235.45V661"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M812.5 1287V1270.46C812.5 1243.95 833.99 1222.46 860.5 1222.46H1333C1359.51 1222.46 1381 1200.97 1381 1174.46V438"
        stroke="#D1D1D1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.03"
        d="M325 1220V1203.45C325 1176.94 303.51 1155.45 277 1155.45H228C201.49 1155.45 180 1133.96 180 1107.45V533"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

function PatternMobile({ width, height }) {
  //<svg width="375" height="988" viewBox="0 0 375 988" fill="none" xmlns="http://www.w3.org/2000/svg">
  return (
    <g
      className={styles.svgGroupPatternMobile}
      transform={`translate(${width / 2 - 375 / 2 + 3},${20})`}
    >
      <path
        opacity="0.1"
        d="M184.423 218.132V218.132C184.423 244.359 163.161 265.621 136.934 265.621L-349 265.621"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.2"
        d="M184.424 319.033V319.033C184.424 345.26 163.162 366.522 136.935 366.522L-348.999 366.522"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.05"
        d="M184 126.066V126.066C184 135.418 191.582 143 200.934 143L297 143C323.51 143 345 121.51 345 95L345 1.99998"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.1"
        d="M184.055 171.747V171.747C184.055 197.994 205.332 219.271 231.578 219.271L404.055 219.271C430.564 219.271 452.055 240.761 452.055 267.271L452.055 677.561"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.1"
        d="M184.055 343.747V343.747C184.055 369.994 205.332 391.271 231.578 391.271L404.055 391.271C430.564 391.271 452.055 412.761 452.055 439.271L452.055 849.561"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.05"
        d="M184.055 265.989V265.989C184.055 292.236 205.332 313.513 231.578 313.513L327.483 313.513C353.993 313.513 375.483 335.003 375.483 361.513L375.483 771.802"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.05"
        d="M48.5823 584.055V584.055C48.5823 610.302 69.8593 631.579 96.1059 631.579L107.341 631.579C133.85 631.579 155.341 653.069 155.341 679.579L155.341 1089.87"
        stroke="#212121"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}
const Circle = function CircleComponent({ index, speed, unmount, start }) {
  const timeoutRef = useRef(null);
  const offset = 0.15 * index + 0.1;
  //const duration = 2 * (1 - offset);
  const duration = speed * (1 - offset);
  return (
    <g transform={"translate(-54.5, -34.5)"}>
      <circle
        cx="54.5"
        cy="34.5"
        r="14.5"
        fill="#3A67E6"
        className={styles.svgGroupCircle}
      />
      <circle
        cx="54.5"
        cy="34.5"
        r="14.5"
        fill="url(#paint0_radial)"
        fillOpacity="0.05"
      />
      <circle
        cx="54.5"
        cy="34.5"
        r="14.5"
        fill="url(#paint1_linear)"
        fillOpacity="0.2"
      />
      <animateMotion
        dur={`${duration}s`}
        values={"[0,1]"}
        calcMode="linear"
        id={start}
        fill={"freeze"}
        restart={"always"}
        ref={(el) => {
          if (el) {
            if (!timeoutRef.current) {
              el?.beginElement?.();
              timeoutRef.current = setTimeout(() => {
                unmount();
              }, 0.99 * duration * 1000);
            }
          }
        }}
      >
        <mpath xlinkHref={`#message-path-${index}`} />
      </animateMotion>
    </g>
  );
};

function MessageTrackingPath({ index, left, vx, right, top, bottom }) {
  return (
    <path
      id={`message-path-${index}`}
      d={`
      M ${left} ${bottom}
      H ${vx - 48}
      C ${vx - 21} ${bottom} ${vx} ${bottom - 22} ${vx} ${bottom - 44}
      V ${top + 50}
      C ${vx} ${top + 23} ${vx + 21} ${top + 2} ${vx + 48} ${top + 2}
      H ${right - 50}
      C ${right - 24} ${top + 2} ${right} ${top + 23} ${right} ${top + 50}
      V ${top + 100}`}
      stroke="#C1C1C1"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function MessageTrackingPathMobile({ index, left, top, bottom }) {
  return (
    <path
      id={`message-path-${index}`}
      d={`M ${left} ${top}  V ${bottom}`}
      stroke="#C1C1C1"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function matchMedia(mq, initial = false) {
  if (typeof window === "undefined") {
    return initial;
  }
  return window.matchMedia(mq).matches;
}

function MessagePath({
  messageQueue,
  setMessageQueue,
  setPhoneMessages,
  messageContainerRef,
}) {
  const ref = useRef();
  const [size, setSize] = useState({ width: 1193, height: 601 });
  const { width, height } = size;
  const { "--tablet": tablet, "--mobile": mobile } = customMedia;
  const isTablet = matchMedia(tablet);
  const isMobile = matchMedia(mobile);

  const observer = useRef(
    typeof window === "undefined"
      ? null
      : new ResizeObserver((entries) => {
          const { width, height } = entries[0].contentRect;
          setSize({ width, height });
        })
  );

  useEffect(() => {
    observer?.current?.observe(ref.current);
    return () => {
      if (ref.current) {
        observer?.current?.unobserve(ref.current);
      }
    };
  }, [ref, observer]);

  const messageRects = Array.from(
    messageContainerRef.current?.children ?? []
  ).reduce((acc, el) => {
    const rect = el.getBoundingClientRect();
    if (rect.height === 0) {
      return acc;
    }
    return acc.concat(rect);
  }, []);

  let paths;
  let speed;

  const speedFactor = 1 / 500;
  const phoneWidth = 379;
  const offsetVerticalLine = 76;

  const right = width - 0.5 * phoneWidth;
  const vx = width - phoneWidth - offsetVerticalLine;

  const MessageTrackingPathComponent = isMobile
    ? MessageTrackingPathMobile
    : MessageTrackingPath;

  if (isTablet) {
    const top = -42;
    const containerHeight = messageRects[1]?.top - messageRects[0]?.top - top;
    const containerWidth = width - 0.5 * phoneWidth;
    speed =
      speedFactor *
      Math.sqrt(Math.pow(containerHeight, 2) + Math.pow(containerWidth, 2));

    paths = messageRects.map((rect) => {
      const bottom = rect.top - messageRects[0].top + 76;
      const left = rect.width - 16;
      const vx =
        messageRects[0].width +
        20 +
        0.5 * (width - messageRects[0].width - phoneWidth);
      return {
        top,
        bottom,
        right,
        left,
        vx,
      };
    });
  } else if (isMobile) {
    speed =
      speedFactor * (messageRects.slice(-1)[0]?.top - messageRects[0]?.top);
    paths = messageRects.map((rect) => {
      const top = rect.top - messageRects[0].top + 16;
      return {
        top,
        bottom: height,
        right: width / 2,
        left: width / 2,
      };
    });
  } else {
    const top = -42;
    const bottom = height + 16;
    const containerHeight = bottom - top;
    const containerWidth = width - 0.5 * phoneWidth;
    speed =
      speedFactor *
      Math.sqrt(Math.pow(containerHeight, 2) + Math.pow(containerWidth, 2));

    paths = messageRects.map((rect) => {
      const left = rect.width + rect.left - messageRects[0].left - 16;
      return {
        top,
        bottom,
        right,
        left,
        vx,
      };
    });
  }

  return (
    <div className={styles.root} ref={ref}>
      <svg
        className={styles.path}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <PatternDesktop
          width={width}
          phoneWidth={phoneWidth}
          offsetVerticalLine={offsetVerticalLine}
          bottom={paths?.[0]?.bottom}
        />
        <PatternMobile width={width} height={height} />
        {paths.map((props, index) => (
          <MessageTrackingPathComponent key={index} index={index} {...props} />
        ))}
        {messageQueue.map((message) => (
          <Circle
            index={message.index}
            speed={speed}
            unmount={() => {
              setMessageQueue((prev) =>
                prev.filter(({ startTime }) => startTime !== message.startTime)
              );
              setPhoneMessages((prev) => [
                { animate: true, ...message.message },
                ...prev,
              ]);
            }}
            start={message.startTime}
            key={message.startTime}
            message={message}
          />
        ))}
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(54.5 34.5) rotate(90) scale(14.5)"
          >
            <stop />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint1_linear"
            x1="54.5"
            y1="20"
            x2="54.5"
            y2="49"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.322917" stopOpacity="0" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default MessagePath;
