import React, { useEffect, useRef, useState } from "react";
import styles from "./messagePath.module.css";

const Circle = function CircleComponent({ index, unmount, start }) {
  const timeoutRef = useRef(null);
  const offset = 0.15 * index + 0.1;
  const duration = 2 * (1 - offset);
  return (
    <g transform={"translate(-54.5, -34.5)"}>
      <circle
        cx="54.5"
        cy="34.5"
        r="14.5"
        fill="#3A67E6"
        className={styles.circle}
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
        keyPoints={`0;${offset};1`}
        keyTimes={`0;0;1`}
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
        <mpath xlinkHref="#message-path" />
      </animateMotion>
    </g>
  );
};

function MessagePath({ messageQueue, setMessageQueue, setPhoneMessages }) {
  const ref = useRef();
  const [size, setSize] = useState({ width: 1193, height: 601 });
  const { width, height } = size;

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

  const top = -100;
  const bottom = height + 16;

  const phoneWidth = 379;

  const right = width - 0.5 * phoneWidth;
  const x = width - phoneWidth - 100;

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
        <g
          transform={`translate(${width - 1770 + phoneWidth + 100},${
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
        <path
          id={"message-path"}
          d={`M2 ${bottom}H${x - 48}C${x - 21} ${bottom} ${x} ${
            bottom - 22
          } ${x} ${bottom - 44}V${top + 50}C${x} ${top + 23}
            ${x + 21} ${top + 2} ${x + 48} ${top + 2}H${right - 50}C${
            right - 24
          } ${top + 2} ${right} ${top + 23} ${right} ${top + 50}V${top + 100}`}
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {messageQueue.map((message, index) => (
          <Circle
            index={message.index}
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
