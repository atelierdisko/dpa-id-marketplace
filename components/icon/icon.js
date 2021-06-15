import cn from "classnames";
import styles from "./icon.module.css";
import PropTypes from "prop-types";

function Icon({ className, Component, color, ...rest }) {
  return (
    <span {...rest} className={cn(className, styles.root)}>
      <Component color={color} />
    </span>
  );
}

FullLogoIcon.propTypes = {
  color: PropTypes.oneOf(["white", "black"]).isRequired,
};

FullLogoIcon.defaultProps = {
  color: "white",
};

function FullLogoIcon({ color }) {
  return (
    <svg
      width={150}
      height={34}
      viewBox="0 0 150 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.118 12.356c-1.34-2.004-3.472-2.2-4.513-2.2-4.166 0-6.993 3.178-6.993 7.284 0 4.057 2.876 7.381 7.142 7.381.992 0 2.876-.195 4.314-2.2v1.76h3.968V1.846h-3.918v10.51zm-3.521 8.995c-2.282 0-3.869-1.711-3.869-3.911s1.587-3.91 3.869-3.91c2.281 0 3.868 1.71 3.868 3.91s-1.587 3.91-3.868 3.91zM74.592 10.156c-2.58 0-3.869 1.32-4.513 2.2v-1.76H66.11v22.535h3.868v-10.51c1.587 2.054 3.522 2.2 4.514 2.2 2.083 0 3.67-.782 4.76-1.76.893-.782 2.233-2.492 2.233-5.621 0-2.689-1.092-4.448-2.084-5.475-1.587-1.515-3.57-1.809-4.81-1.809zm1.636 10.217c-.496.489-1.339.978-2.678.978-1.24 0-2.083-.49-2.579-.93-.793-.635-1.29-1.71-1.29-2.981 0-1.27.447-2.249 1.29-2.982.744-.635 1.488-.929 2.58-.929a4.2 4.2 0 012.677.978c.794.733 1.24 1.906 1.24 2.933s-.347 2.15-1.24 2.933zM94.579 10.596v1.76c-1.34-2.004-3.472-2.2-4.513-2.2-4.166 0-6.993 3.178-6.993 7.284 0 4.057 2.827 7.381 7.142 7.381.991 0 2.876-.195 4.314-2.2v1.76h3.968V10.596h-3.918zm-3.57 10.755c-2.282 0-3.87-1.711-3.87-3.911s1.588-3.91 3.87-3.91c2.28 0 3.867 1.71 3.867 3.91s-1.587 3.91-3.868 3.91z"
        fill={color}
      />
      <path
        d="M111.342 21.253c2.133 0 3.869-1.711 3.869-3.813 0-2.102-1.736-3.813-3.869-3.813s-3.868 1.711-3.868 3.813c0 2.102 1.785 3.813 3.868 3.813z"
        fill="#0045F4"
      />
      <path
        d="M128.155 5.953v21.361h-2.381V5.953h2.381zM132.966 5.953h4.414c2.182 0 5.257.244 7.985 2.493 1.984 1.613 3.719 4.35 3.719 8.212 0 4.497-2.231 6.892-3.769 8.212-1.984 1.662-4.067 2.444-7.935 2.444h-4.414V5.953zm2.38 19.113h2.083c1.736 0 4.117-.196 6.2-1.907 1.637-1.32 2.926-3.47 2.926-6.501 0-5.133-3.62-8.457-9.126-8.457h-2.083v16.865z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.863.38c-1.786 0-3.522.293-5.158.782v31.627a16.51 16.51 0 005.158.831c9.323 0 16.862-7.43 16.862-16.62 0-9.19-7.539-16.62-16.863-16.62zm.694 5.768C23.31 6.539 27.873 11.232 27.873 17c0 5.768-4.563 10.51-10.316 10.852V6.148zM0 17c0-5.035 2.281-9.532 5.852-12.563v25.175C2.282 26.532 0 22.035 0 17z"
        fill="#0045F4"
      />
    </svg>
  );
}

function LogoIcon({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C8.941 0 7.912.176 6.941.47V19.5c.97.323 2 .5 3.059.5 5.53 0 10-4.47 10-10S15.53 0 10 0zm.412 3.47c3.411.236 6.117 3.06 6.117 6.53s-2.706 6.323-6.117 6.53V3.47zM0 10a9.951 9.951 0 013.47-7.559v15.147C1.354 15.735 0 13.03 0 10z"
        fill="#0045F4"
      />
    </svg>
  );
}

function DpaNewsIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 29.325C32 30.8022 30.8107 32 29.3437 32H10.75V5.25H32V29.325Z"
        fill="#006345"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.736 25.576C26.5655 27.6335 24.853 29.25 22.7656 29.25H5.5V2.5H26.75V25.5717L26.736 25.576Z"
        fill="#00B064"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.236 23.0759C21.0654 25.1335 19.353 26.75 17.2656 26.75H0V0H21.25V23.0719L21.236 23.0759Z"
        fill="#00E281"
      />
      <path d="M16 14.5H5.25V17.25H16V14.5Z" fill="#00B064" />
      <path d="M16 20H5.25V22.75H16V20Z" fill="#00B064" />
      <path
        d="M10.7505 12C12.9596 12 14.7505 10.2091 14.7505 8C14.7505 5.79085 12.9596 4 10.7505 4C8.54134 4 6.75049 5.79085 6.75049 8C6.75049 10.2091 8.54134 12 10.7505 12Z"
        fill="#006345"
      />
    </svg>
  );
}

function DpaSelectIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33321 10.6665V24.11L5.33551 24.1111C5.39406 25.5321 6.56451 26.6661 7.99983 26.6661H23.9995C25.4722 26.6661 26.6662 27.8598 26.6662 29.3325C26.6662 30.8052 25.4722 31.9991 23.9995 31.9991H0V13.6664C0 13.5194 0 13.4083 0 13.3331C0 11.8604 1.19388 10.6665 2.66662 10.6665H5.33321Z"
        fill="#006345"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.6669 21.3328H8.0006C6.52788 21.3328 5.33398 22.5266 5.33398 23.9993C5.33398 24.0368 5.33476 24.074 5.33628 24.111L5.33398 24.1099V5.33327C5.38541 2.38749 7.73291 0.00012207 10.6672 0.00012207H32.0001V15.9996C32.0001 18.9995 29.5981 21.3285 26.6669 21.3328Z"
        fill="#00E281"
      />
      <path
        d="M10.6665 10.6666C10.6665 13.612 13.0542 15.9997 15.9996 15.9997C18.945 15.9997 21.3328 13.612 21.3328 10.6666C21.3328 7.72119 18.945 5.3335 15.9996 5.3335C13.0542 5.3335 10.6665 7.72119 10.6665 10.6666Z"
        fill="#006345"
      />
      <path
        d="M29.3322 11.9998H23.999V14.6664H29.3322V11.9998Z"
        fill="#00B064"
      />
      <path
        d="M29.3322 6.66663H23.999V9.33329H29.3322V6.66663Z"
        fill="#00B064"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.6655 29.3324C26.6655 27.8597 25.4715 26.666 23.9988 26.666H7.99914C6.52642 26.666 5.33252 25.4721 5.33252 23.9994C5.33252 22.5267 6.52642 21.3328 7.99914 21.3328H26.6655V29.3324Z"
        fill="#00B064"
      />
    </svg>
  );
}

function DpaAgendaIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9999 8.00016V32.0001H7.99971C6.52694 32.0001 5.33301 30.8061 5.33301 29.3333V8.00016C5.33301 6.52742 6.52694 5.3335 7.99971 5.3335H29.3332C30.8059 5.3335 31.9999 6.52742 31.9999 8.00016Z"
        fill="#006345"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.0002 0.000244141H26.667C28.1398 0.000244141 29.3335 1.19415 29.3335 2.66691V29.3334H2.6667C1.19392 29.3334 0 28.1396 0 26.6669V2.66691C0 1.19415 1.19392 0.000244141 2.6667 0.000244141H5.33337V2.66691H8.00008V0.000244141H21.3335V2.66691H24.0002V0.000244141Z"
        fill="#00E281"
      />
      <path d="M4 10.6668H9.3333V5.33362H4V10.6668Z" fill="#00B064" />
      <path d="M20 10.6668H25.3333V5.33362H20V10.6668Z" fill="#00B064" />
      <path d="M4 26.6668H9.3333V21.3336H4V26.6668Z" fill="#00B064" />
      <path d="M12 10.6668H17.3333V5.33362H12V10.6668Z" fill="#00B064" />
      <path d="M12 18.6668H17.3333V13.3336H12V18.6668Z" fill="#00B064" />
      <path d="M12 26.6668H17.3333V21.3336H12V26.6668Z" fill="#00B064" />
      <path d="M20 18.6668H25.3333V13.3336H20V18.6668Z" fill="#00B064" />
      <path d="M20 26.5833H25.3333V21.2501H20V26.5833Z" fill="#00B064" />
      <path
        d="M6.66677 18.6669C8.13959 18.6669 9.33355 17.4729 9.33355 16.0001C9.33355 14.5273 8.13959 13.3334 6.66677 13.3334C5.19396 13.3334 4 14.5273 4 16.0001C4 17.4729 5.19396 18.6669 6.66677 18.6669Z"
        fill="#006345"
      />
    </svg>
  );
}

function DpaVideoPortalIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 0.0208754V0.000244141H32V10.6669H0V2.66692C0 1.19415 1.19391 0.000244141 2.66668 0.000244141C2.77955 0.000244141 2.8908 0.00725859 3 0.0208754Z"
        fill="#00E281"
      />
      <path
        d="M0 21.3336V10.6669H32V18.6669C32 20.1397 30.806 21.3336 29.3333 21.3336H0Z"
        fill="#00B064"
      />
      <path
        d="M12.6981 6.05665C12.6743 5.69113 12.802 5.31758 13.0814 5.0382C13.5961 4.52348 14.4307 4.52348 14.9454 5.0382C14.9682 5.061 14.9899 5.0844 15.0107 5.10838L18.6898 8.78745L18.6934 8.78391L20.579 10.6695L14.9645 16.284C14.9549 16.2942 14.9451 16.3043 14.9352 16.3143C14.4232 16.8263 13.5931 16.8263 13.0811 16.3143C12.8117 16.0448 12.684 15.6873 12.6981 15.3344V6.05665Z"
        fill="white"
      />
      <path d="M32 28.0002H16V30.667H32V28.0002Z" fill="#E3E3E3" />
      <path d="M16 28.0002H0V30.667H16V28.0002Z" fill="#00B064" />
      <path
        d="M15.9998 32.0002C17.4726 32.0002 18.6665 30.8062 18.6665 29.3335C18.6665 27.8607 17.4726 26.6667 15.9998 26.6667C14.527 26.6667 13.333 27.8607 13.333 29.3335C13.333 30.8062 14.527 32.0002 15.9998 32.0002Z"
        fill="#006345"
      />
    </svg>
  );
}

function DpaShopIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8009 12.886C24.966 13.0487 25.1621 13.1778 25.3779 13.2658C25.5936 13.3538 25.8251 13.3992 26.0586 13.3992C26.2924 13.3992 26.5236 13.3538 26.7394 13.2658C26.9554 13.1778 27.1514 13.0487 27.3164 12.886C27.4816 12.7235 27.6129 12.5306 27.7024 12.3182C27.7919 12.1058 27.8379 11.8781 27.8379 11.6482C27.8379 11.4183 27.7919 11.1906 27.7024 10.9782C27.6129 10.7658 27.4816 10.5729 27.3164 10.4104L17.2542 0.516428C17.0891 0.353758 16.893 0.224709 16.6772 0.136662C16.4614 0.0486149 16.2301 0.0032959 15.9964 0.0032959C15.7628 0.0032959 15.5315 0.0486149 15.3157 0.136662C15.0998 0.224709 14.9038 0.353758 14.7387 0.516428C14.4075 0.844235 14.2217 1.28767 14.2217 1.74989C14.2217 2.2121 14.4075 2.65553 14.7387 2.98335L24.8009 12.886Z"
        fill="#E3E3E3"
      />
      <path
        d="M7.20101 12.886C7.03591 13.0487 6.83984 13.1778 6.62401 13.2658C6.40819 13.3538 6.17686 13.3992 5.94324 13.3992C5.70961 13.3992 5.47826 13.3538 5.26246 13.2658C5.04664 13.1778 4.85056 13.0487 4.68546 12.886C4.52016 12.7235 4.38904 12.5306 4.29956 12.3182C4.21011 12.1058 4.16406 11.8781 4.16406 11.6482C4.16406 11.4183 4.21011 11.1906 4.29956 10.9782C4.38904 10.7658 4.52016 10.5729 4.68546 10.4104L14.7477 0.516428C14.9128 0.353758 15.1089 0.224709 15.3247 0.136662C15.5405 0.0486149 15.7718 0.0032959 16.0055 0.0032959C16.2391 0.0032959 16.4704 0.0486149 16.6862 0.136662C16.9021 0.224709 17.0981 0.353758 17.2632 0.516428C17.5943 0.844235 17.7802 1.28767 17.7802 1.74989C17.7802 2.2121 17.5943 2.65553 17.2632 2.98335L7.20101 12.886Z"
        fill="#E3E3E3"
      />
      <path
        d="M15.9991 4.37428C17.2264 4.37428 18.2213 3.39513 18.2213 2.18729C18.2213 0.979452 17.2264 0.000305176 15.9991 0.000305176C14.7718 0.000305176 13.7769 0.979452 13.7769 2.18729C13.7769 3.39513 14.7718 4.37428 15.9991 4.37428Z"
        fill="#006345"
      />
      <path
        d="M32 15.6854C32 16.1494 31.8127 16.5944 31.4792 16.9225C31.146 17.2506 30.6938 17.4349 30.2222 17.4349H1.77778C1.30628 17.4349 0.854097 17.2506 0.5207 16.9225C0.187301 16.5944 0 16.1494 0 15.6854V12.1862C0 11.7222 0.187301 11.2771 0.5207 10.949C0.854097 10.6209 1.30628 10.4366 1.77778 10.4366H30.2222C30.6938 10.4366 31.146 10.6209 31.4792 10.949C31.8127 11.2771 32 11.7222 32 12.1862V15.6854Z"
        fill="#00E281"
      />
      <path
        d="M25.9293 32.0003H6.07144L2.66699 17.4349H29.3336L25.9293 32.0003Z"
        fill="#00E281"
      />
      <path
        d="M16.8891 20.1556H15.1113V28.9035H16.8891V20.1556Z"
        fill="#00B064"
      />
      <path
        d="M13.3334 20.1556H11.5557V28.9035H13.3334V20.1556Z"
        fill="#00B064"
      />
      <path d="M9.77777 20.1556H8V28.9035H9.77777V20.1556Z" fill="#00B064" />
      <path
        d="M20.4448 20.1556H18.667V28.9035H20.4448V20.1556Z"
        fill="#00B064"
      />
      <path
        d="M24.0009 20.1556H22.2231V28.9035H24.0009V20.1556Z"
        fill="#00B064"
      />
      <path
        d="M29.1293 18.3097L29.3336 17.4349H2.66699L2.87144 18.3097H29.1293Z"
        fill="#00B064"
      />
    </svg>
  );
}

function DpaPictureAllianceIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect y="0.000396729" width="32" height="32" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAED/SURBVHgB7d1fbFX3lejxtY8NOEkJJu0MVOXWx9JIafvC6cuFp3CYUUhHqorTRK3ahwHPw6T3ZTD3qtWM1NbHTR9GqXQxeWrnoUAf2ttRI0zVSpNEI0yrK8FTzH0ozcOMj9OkJf2THEITDMZn37328YZj4z/nz96/P3t/P5VrMAYfjslZ67d+67d+gQBw33ytHP3/8MpbOf5YaeV9UBpZ+azo18LhlR+X1/wJye/tVH3jnwetH4fNhfh9M/61xqq30VpdADgtEAD2zNeSgF6WwWBEmuFoFNB3RdG1vPLxbgO3SxoSRslBoElBEP24eVVKwbtyN1yQVqIwFyUKDQFgBQkAkLXW6r3SFuCjFXtYEb+De1pWkoSoqqAVhVIwHyUIV6VVRZgTAJkhAQDS0h7ow6AiYRTkg3urePQijKoEreTgarTVoAlBncQASAcJANCtpGw/GBwi0FvR2j4Iw6v3KgajtVkB0BUSAGAr87XKmmBfEbinVS2Yk1I4K0txUkClANgECQDQrrW6r0hJxqJgsj/+MSt7XyWVgkvR9sGs0HQIrEICgGJrBfxqFPCr0X8Oh1jd55xWCeReQjBLQoAiIwFAsbSv8An4uJ8QzNBHgKIhAUD+3dvD16BPSR+bmo1eFWfkbpQU0EOAnCMBQP6s3sc/Kg9OxQM6UY9eImdluXmO6gDyiAQA+dAK+mMyEBwTVvlIXyNOBkrhjCzF1YG6AJ4jAYC/NOgPRgG/VdqvCmBOlAzIWZIB+IwEAH4h6MM9JAPwEgkA3EfQhz+SZOACRwzhOhIAuGu+VpWB0gmRsCrs6cM7wVlZbmoiMCOAg0gA4BYN+oOlQxKGE0LQRz7UV04TTLFFAJeQAMA+SvwoDrYI4AwSANijq/3WWX09usdqH0WixwpnqArAJhIAmKWr/YF4DK8G/aoAaFUF9k2eE8AgEgCYEZf5SyfY2wc2VKdXACaRACBb9zv5xwRAh+ITBKe5jwBZIgFANuLAH0wKZX6gH2wPIDMkAEjP/W5+LfOXBUBa6lEiUCMRQJpIANA/9vcBU1qJAGOHkQISAPSOwA/YUpcgOCt346uK6wL0gAQA3SPwA64gEUDPSADQOQI/4CoSAXSNBABbI/A7pTzY+haUB4ajt13xj3cNDMnuYEiGS0OyK3pTw6Ud0dtDq3/vyuevp9FclEZ4e83HbkVvrY/d0F+P3t4NF+XGsn7uYvxr8edEv69+l8m2DiARQMdIALAxAr9RGrw1QGuAH4neRqMAr8Fcf64f118fXgnurtIEQRMBTQg0Mbh65+04YVjQj0XJwtzS9fhzkDlODWBLJABY3xu149E/j1NC4E9VEsx19V7ZvjcK9K0f68ddD+5pSZKE+nIjSgxuyHz0XhMFkoNMkAhgQyQAWC2+oCcK/IFUBD3TYF7Ztkf2R0G+sm1v/OMiBfleaQIwt/R2lBBcJzFIF4kAHkACgBYm9/VMg3p1x0hcttf3GvCTfXqkQysGmghoQjB7e4GkoHezshyO0x8ARQJQdPHtfKUo8Mf7/NjC2pW9BnyCvR1JUqAJQSsxqAs6Fd81wKVDBUcCUGS/+dYkDX6bSwL+2EOfiIL+njjoU8Z3VysZuC4zt16nSrC11omB//bNKUEhkQAUUavcf0aY1/+AtQG/uqMs8Fd7QkCFYEP0BxQUCUCRzNfKK4G/KrhHS/hHH3o8CvqPs8LPOU0IZm79Wi4t1uNmQ7RjW6BoSACKgnL/Pe2rfA387OEXk/YQaFXg3Pv/j+pAuyCosS1QDCQAeUe5P6ZBf2zocTn68ONxWZ9VPtppr4AmAbpVcCF6o3cg2hZYDp+OqgFzgtwiAcgruvvjIH/skf1xaZ+9fHRDtwrOvj8nl6KkoH73hhQX2wJ5RgKQR2/UxqJvra76C1fbJugjbSQDNAnmFQlAnhS0yS/Z05/cdYgmPmRKGwjPvX813iooHqoBeUMCkBe/ef6EhM2aFGjVr0N4tJFPV/wEfZhU4AZCqgE5QgLgu4Kt+jXQn9h5IA7+lPjhAk0Gau9dKtgWAdWAPCAB8Nmbzx+TZnNaCrDq14B/YufB+D2rfbhKewUKVBWgGuA5EgAftTr8o1V/OCY5lqz2kwE9gC+KVRWgGuArEgDfFOBcP3v7yAudJ6CNg1NRMpDzRKC+csvgrMAbJAA+eeNbp/J8rl8Dv3bys7ePPNLjhFM3LuV7e4Apgl4hAfCBNvqVgvPRd6siORNP6ItK/LraJ/CjCJLtAT1OmFNaDTjMloD7SABcl9Pjfcn+/sSHDlDmRyHlvE+gEb1uTcnI1LTAWSQArmo1+mnJ/7jkCIEfWE0TgbMfXI0qAnM5TATiBsGTUTWgIXAOCYCL5msVGYhK/jlq9CPwA5tLhgvlsGGQLQFHkQC4JmclfwI/0D2dJ5CzRIAtAQeRALgiZ7f3EfiB/uRzayCYlo9/86TACSQALshRlz+BH0hXkgjoEcKcYEvAESQAtrUG++h+v/clfw38tUcPEfiBDOTs+CCDgxxAAmBTa7/f+z0xHeBz5rGjUh4szEWEgDW5SgQYHGQVCYANOTnix+Q+wB6dLDj+zkwO+gPoC7CFBMC0HOz3a4lfA7/u8wOwKycnBugLsIAEwKQcnO9nnx9wj24LnP7zFZm+eUU8RhJgGAmAKW8+f0ya8X6/lxvlWu4/NfyUVLZzLS/gKk0Env7jj2Vu6W3xVGOlOXBGkDkSABN+861JCcOaeEhX+tPDR+TYI7m7hwjILe+3BWgONIIEIGseX+FLuR/wl/+nBWgOzBoJQFbiTv94v78qnikP7oqP9dHdD/hPE4HDfzjnaTUgmJHl5jiXCWWDBCALHnf6a3e/rvoB5ItWAzydJkhzYEZIANKmwX8guCiedfrT5Afkn8fVAJKADJAApMnDY36c6QeKx9NqgCYBT0dJwJwgFSQAafFwpn9l+x45/+EvMsIXKCBPqwGNlUoASUAKSoL+6Rn/Vtnfm0iqHf6v7XmO4A8UlP63P//RE3EF0CPaXP1a/JqLvlEB6JdnF/rQ4Q9gLS+rAWHzpIxMeX+Zmk0kAP3wbMAP5/oBbKTRXJSJxst+zQ1gYFBfSAB65VHw14B/aviIHGeaH4At6BTBk+++Io1wUbxAEtAzEoBeeBT8afQD0C3vtgRIAnoyIOiOR8FfS/4zH/kiJX8AXdHXjImdB+Ml4qXbC+KBqvzPvxY5ddHLSUe2kAB0w5Pgr//x/ujDn2/9BwwAPdJmYW0cvrp0XRrN2+I4koAusQXQKU+CPyV/AGnzakuA7YCOkQB0wpPgT5c/gCydbLws0zeviPNIAjrCFsBWPAn+p3Y/FQf/oWBQACALnxn6q2iBsUNeXvxPcRzbAR2gArAZD4K/7s9pyZ9LfACYMnfnujz9px+7vyVAJWBTJAAb8SD4s98PwBZv+gJIAjbEFsB64vG+4b+Iw449sl/+z4efkb0DHxIAME17jXS42G25K5fvvCUOq8rEoRsyfemyYBUqAGvpJRPN5llx2GS011/z6wIPADnmxfXCpdJx2feNc4J7SADazdcq8U1TjmKkLwBXTd+8LCcbr4jTWlcJzwpiJACJVvB39kpfmv0AuM6D5sDGShIwJyABiM3XyivBvywO0uB/8S+O0ewHwHkeNAfWV5KAuhRcSYrO8eCvnf4EfwC+0Ncqfc2qbNsjjmq95utrf8EVuwIwXxte2fMvi4O00396+Ckm+wHwTqO5KOPvXJCZW6+Lk0KZk2ZcCWhIQRW7AjBQOiOOBn8d63v2saMEfwBe0teu8x/5okxEr2VOCkT7vs5LgRV3DsAb3zoVpYDHxUF6zO9fhv9GAMB3Oj7Y4WuFy3Lyr4fl1MWXpYCKmQDolD8J/0kcxBl/AHmj1wo7nAQcLOq9AcVLAHTQTxhOi4MI/gDyyvEkoCr/62/q8r8vXpUCKVYTYKvjX5v+nGupP/PY5xjwAyD3HB4YVLgZAcVJABw+7kfwB1AkZ9+fk/F3fioOKtSMgOKcAiD4A4AT9DVPX/scVJZScD4+Il4AxUgA4o5/gj8AuMLZJCA+Hlg6JQWQ/wSg1fE/IY4h+AMoOncrAeFxWZh0Lm6kLd89APO16krp3ykEfwC4z9megJzfHpjfBMDRpj+CPwA8yNEkQE8GfDqvTYH53QIg+AOANxzdDhjOc1NgPgcBtZr+PiMO0SE/EzsPCgBgfZXte90bFhTIXimVhvI4Ljh/CcBvnj8hEtbEIUz4A4DOODox8KBMHLoh05cuS47kqwfAwUl/BH8A6F7tvUsydcOp8fy5mxSYnwRA92hawb8sjtArfaeHnxIAQPdONl6W6ZtXxCH1labAhuRAfpoAS6IX/JTFEWMPPU7wB4A+nIpeQ489sl8cUs7TkKB8JAC67x8Ex8QRle175MxjRwUA0B9dSFW27RF35GdIkP9bAI7t+5cHd8nFvzgWvS/EKGkAyFz9bkMO/+Fc9P6GOCIX8wH8rwC0zvsT/AEgp/Q1tfXauksc0ZoP4Dm/E4B4zr87+/7nP/xFgj8AZEBfW/U1djgYEifopUGtmTPe8jcB0Dn/oTvn/U/tfqo1xAIAkAl9jT21+4i4I5yIY5Gn/EwAWvv+Z8QR8ZS/Dx0QAEC2dGTwpEuzVTQWeToq2M8EoCQ1caT0r2f9GfQDAObUokWXQ8cD9WigMwvSbviXALxRO+7KkT9tSNF/iAAAs9w6HhiOyZvPO3MUvVN+HQN06IpfOv4BwC7Hjgd6dzTQrwqAQ6V/Ov4BwK7kZIAjhl3qTeuEPwmAQ6V/Ov4BwA3xyYBhZ04GVH2aEujHFoBDpX8u+AEA9zh0cZA3WwF+VAAcKf3rvj/BHwDco8exHWkK9GYrwP0EwJHSf9L0BwBwz3BpSM5/xJlJgdWocj0mjnM7AdDSvwST4gA97kfTHwC4S1+jz3z4c+IEDwYEuZ0AOFL6n4yHTlQEAOC2sYc+IRM7nZjMGm0FlJxYwG7E3SbA+Vpl5Zpfq7T0P//REwIA8Menr39P5pbeFuuWw8MyWpsVB7lbARiwf9Ui+/4A4Cdn+gEcbgh0MwFw5Jpf9v0BwE/62u3IzYFlWajVxEHubQG0zvzPi2XHH9kvZx47KgAAfzkyH8DJ2QDuVQBajX9Waen/FOf9AcB7k3Eld5dY5uRsALcSAEfO/Ou+v54pBQD4TV/LzzzmxJF8nQ1QFYc4VgGwf+Z/kn1/AMiV6o4RN44GOlYFcCcBcKDxT8tEtV2HBACQL7qt68CoYKcaAt1IALTxLwyPi2Uc+QOA/NLGbutHA4PghCsTAt1IAByY+EfpHwDyTa8Ontz1hFjmzIRA+8cAHTj2x7Q/ACiOw7//gczerotVDkwItF8BcKApgtI/ABTHqWEHBgQN2G96t5sA6LE/PRphEaV/ACgW3QpwoOHb+rFAyxUAuxkQXf8AUExODAgqBafEInsJQGv1XxaLKP0DQHFZHxAUSEXenLIWiCxWAOyu/nXWP6V/ACguJwYENWXa1rFAOwmA5dW/ln20/AMAKDaNBZZnAwxHkXhCLDCfAOixP8urf675BQAovSvA+rXBloYDmU8ABku631EWS7T789gjFQEAQB2PYkJ1R1ksslIFMJsAODDy9/yHvyAAALSzPhvAQhXAbAJgefV/YucBSv8AgAdoddhyQ6DxKoC5UcCtkb8XxVICoI1/euyPBAAAsJ5Gc1FGf/uiNMJFsaQhy+GojNYaYoC5CoDl1T+NfwCAzWhDoOXLgoxWAcxUABxY/XPZDwCgE5YvCzJWBTBTAbC8+j+z+6gAANCJSbsj4o1VAbJPACx3/uvEv+pQWQAA6IROCLR6LNDQiYDsE4CB+La/sljCxD8AQLfOPPY5schIFcDAFoC9qX/M+wcA9EJjh9VjgQaqANkmAJZn/rP6BwD0yvI9AVEVINvt84wrAPZW/5Mc+wMA9EGPBU48arMKUMr0+Fp2CYDF1b8e+9PyPwAA/TjxoQM2qwDlaBugKhnJsAIQHBNLjj1cYfUPAOib9SrAQHaV9GwSgFbGUhULWP0DANJkuQpQzaoKkE0CUJLjYgkjfwEAabJfBcimFyD9UcCtsb/zYgEjfwEAWbB+UdByuDvt8cDpVwBKUhNLahz7AwBkwHoVIIPBQOknAEFgJQrr6v+QzdGNAIBcs9oLkMFgoHQTAItH/+j8BwBkyXIVYFi2BanebJdyBcDO0T86/wEAJlitAjTTbbBPLwHQ5j9LR//01iZW/wCArFmuAqR6JDC9BMBi8x8z/wEAplitApRkTFKSTgKgjQlBunsTneLGPwCASVoFOPrw42JFEG21p9QMmE4CMBBnJFaiMKt/AIBpxx+piCWp3RKY0haAnea/6o4RVv8AAOM0/lRtHT0PSqlU3PtPACw2/7H6BwDYMrnLWgxKpRmw/wTAUvOfHv2rDpUFAAAbtApQ2bZHrCj1v/DuPwGwNPmPsb8AANus9QLoZMA+9ZcAvFHT5r+yGKar/6MPf0IAALDp2CP7bR0JHO53G6C/BCBM7zxiN7TxwuLdzAAAxKwOBurzmuDeE4DW2X8r3f80/wEAXHF0yNJMAAmr/cwE6D0BGLC1+ufoHwDAHZXte20dCexrJkAfWwB2Vv9c+gMAcM2Jnf9drOhjJkBvCYCls//a/HfM3vQlAADWZbE3redtgN4SgAF7t/4BAOAaq82APW4D9LgFQPMfAADtDnk2Grj7BMBS+Z/mPwCAyyzeD9DTNkD3CYCl8j/NfwAA1409ZOlIYA/bAD1sAdgp/x9i/x8A4DhrkwF72AboLgGwVP7XjIryPwDAddoMqHMBLOh6G6C7BMBS+f8Y5X8AgCesXRPc5YC+brcAeh440Cs9+z/2EBf/AAD8oFcE25kJ0N0WfZcJQFAVwzj7DwDwiW4DWGpcr3SzDdB5AtC6dtD4Rvyxhyn/AwD8YunKeo3RHY/L7TwBKMlxMUzL/9WhsgAA4JPqjhE72wClzvsAOk8AgsB4VwPlfwCAr6xsAwRBx716nSUAb9a0pFAWwyj/AwB8ZWkboBxt2Xe0DdBZArAcVsUwbaKg/A8A8JW9bYDOYnZnCUAf9w33yto4RQAAUmIllnUYszvtAaiKYUdJAAAAnhuzsw3Q0XHArROA1vE/4yj/AwB8d8jONkBHxwG3TgBK3Y0WTIO1fRMAAFJk7W6ADmJ3BwmA+eN/XP0LAMgLOz1tW8fuzRMA3UMIO58qlBau/gUA5IWVnrZg6z6AzRMAC7f/Vbbv4epfAEBuaEyzEte2b14F2DwBCM0nAEz/AwDkzdiQhSrA3fDwZr+8eQJgYf//6BDH/wAA+WJnKmCvFQBL+/8c/wMA5E1l2x7zp9u26APYrAJgPvjvGBEAAPLG2nHATWL5xglAyfz+/9hDViYmAQCQOSvHATeZB7BxAmDh+t/9UYkEAIA82m+jAhAEGw7WcWYLgNv/AAB5ZmnKbZdbAG/GdwkbPbRYYfUPAMg5C30AwzJfWzcJGFz305vmGwDZ/8+3N998U65cuSLvvfde/OPk/VqPPvqo7Nu3L37/qU99Snbu3Bm/15+jO/r8Xrt2LX6fPOfJ21r6nCfP+yc/+UmecyAj2gcwe7suRpXCavT/c2s/vH4CoAOAAjGK/f98uXz5chzw9b0GofWCTjc0OGlgOnjwoBw4cCAOULhPn9/k+db3ScDvlP6etZLn/MiRI/Fzrj8H0B87fQAD6/YBrB/mfzP1mukZAOF/+6agc+utntPUy4u9PqaXXnpJzpw503fA34o+Pg1KzzzzTJwUFJE+x/p8v/LKK+sG8LTp8/3ss8/2lAxsVHlIC8kJfNFoLsrob1+URrgoxoTR6n9k8tNrP7x+AvDGVCgGaWPExb88JujcE088kWkS8F//9V8df66uOk+fPm0kCK1HX/xPnDhRmFWqPt+aZCVbKqbp1sCTTz4ZP+edPt9f/epX42QlC/oYfvGLXwjgi8O//4H5bYDlcLeM1hrtH3qwCXC+VhXDLA1HQJ80AfnSl74kX/7yl60F/+RxaIDRpEjfZ10dsUUDf/J8v/rqq1aCv0oqD/p8a+Jn63EAvrLU9F5e+4EHE4BSaOH6XyYA+ub73/++fPazn7Ua+NeTx8DUHvhde771edZ/B1mt7oE8stIH0GoEXP2hBz8rKIthlW1UAHyRrPq//e1vOx1g8xCY9Pl9/vnnnQz87ZIKjD7nALZmZez9Oo2ADyYAm0wNyoIOALJyTzK69qtf/cr5YNQuCUw+bgvoql8TGN3r90WSdOV1CwZIi8Y84wOBwger++sNAjK6BcAAID/85Cc/iYO/jy/uWgXw6bFrIPX1uU6SRJIAYHOHhgxXAYKtegAsTACs7igL3KbB/2tf+5rXe+oakFxfUevz+9xzz3lfStfnmiQA2NzogPHK97D8rlZu/8DqBKD5YIaQtf3bqQC4LAn+eZDsqbsYYJMERbv78yBJAjghAKzPyt03zdVb/KsTgND8CGAaAN2l5Vxt9ssbTQBcSgLyumLWv49WNAA8yMr027vN0fafrk4AAqEBEDF98f7KV76S2xWcK0lA3svl2jCqVRcAq1lpBFxzEmBNAhCUxSAaAN1VhD1cTQBs9gQUZa88mVoIYDXjQ/DWnASwugXABEB3FaWBS1eneuTOBq2wFOV5piEQeJDxRfCakwD3E4A3a8b3/8sDlP9hn41ArImH9lgAKC4LEwFXnQS4nwAsifFozBXAcIH2OeiwIFN0jLJPA34AZKNi4xRc20mA+wmAhTsAKjvYAoAbdI/aRFOgVhpefPFFAQArVfC2kwBtPQBBWQzSEwDGOyCBTWgCkPVWAGfjASTsxMGgnPzofgIQiNG5hJwAgIuy3ArQkcQ0wwFoZ/wofHi/EbAtAQjKYhAnAOAi3QrI4lSABn5uywOwlvHFcOl+D8DgvQ+GZscAcwIgnw4cOCCf+tSn4rdPfvKT8uijj8q+fftWfY4GQ33TUngScK9duyau0NHHv/jFLyRNJrYXuqHfF/1e6fdGv1c7d+6MP9ZOvz/6fdHTCvrYXfoeoXf1uw1pNBfjNxUPZNs2zJasJfFi+IOrYtC94NtKAOZrw2L4EqCRwV2CfNBA8uSTT8qzzz77QBBZjwadJCk4cuRI/F4DjCYCGijfeustsUkfi5brn3nmGUlD8ufZpt+b8fHx+Pt18ODBjn5P8v1RyfdI/y4M9vFDI1yUmQ9el0uLdZm9sxAH/41oIqCrUT2aNjb0uJ1Z9QVkYRrucBzzR2uNIP7pfK0qA8FFMei1Pf/ANkAfnnjiCesrSg0kJ06c6DiYdCpJBGwGGV0V/+xnP5M0aF+BzQQgi+9TsqXhQmKjyWTaFRvfzUYBf+q9SzJ7e0F6pQnB2EOPy+SuQ1RsMzS3dF0+ff1fxajl8NNRAjDX6gEYMD8DQEtO8JOuJL/xjW/Ij370o9SDv9I/U//sF154QT72sY+JDVr2TqMXwObqX587fQ6z+D5p0P3Od74TB16t/sANGvhHf/eiHP7DD/oK/kq3CM6+f1VGf/uijL9zQerLDUH6rCRX24O46b+VAIRhWQziCKC/NKj88Ic/jEvJWdMthV/+8pdGvtZ60mjas3W9r25f/PznP4+fwyxpIvC9731Pvv71r3e0/YNsaHA+/PtzceDfrMzfqyQRmLpxSZAuK/FwZRbAyimAwGgKwhFAP2lTnwYVLY+bpNUGGwFGtyD6PbNvY+Kflvt1dW7y+fr7v//7eMvEVsWmyM69PxeXkPtd8XeiFm0raIWBakC6zPcBBGX9/1YCYOEaYPglWVHaWuVpgNHKg+mv308A1y0E030aWvLXBMAGrQbodgNJgDm6z3/8nZ/e6+g3QSsMmnDM3HpdkA7jTfFBKf6CVioAFroe0Qfd49UVpW1aedAkwKR++gBM7/1r8M+65L8VkgBzNPjXLJXkNeF4+o8/jqsP6N+o8T6AZln/P6kAGP3q7P/7Q1/IXQj+CU0CdDvAlH62AUzu/+uq33bwTyRJAD0B2bEZ/Ntp9UEbD9Efu1sAhocA7d9OD4AP9AXcxRdy3Q4w2Xney0peKwemZv7rc2Gr7L8RTQJMJmpF4krwTzz9p3+jJ6BPu8xvi8cZR6n9J8a+MhUAL+gL+Nopfq4w2eSmRwK7ZWr1rxUabZJ0kVYkOCKYLg20LgV/pdsBh3//g3joEHpjZRiQaAIwXyuLYTQBuk8Diysl5fUkU+1M6GUgkakhRrrydzVJU5qcsBWQHg20LtLGQI4I9q48YGEy7u9q5ZJsYwgQHuTSvv9GNAEwEVySuws6paX/XqoG3XI9SVOanNia45A3WvrP4ox/WqZvXmEroEdWFsWL0ZeVJfMJAFsAbtPAksWEv7SZrAJ0E9BNBH/l2r7/RkwlanmmgVWH8bhu/E8XBN2zVBWPEgDDY4A5Aug+XwKLMhVcurkJz0QCoH9n11f/CX2saV2sVFSziwtOr/4TOoyIUwG9MR4bByTaAlg23ABY2iFwmw+r/4QGF51QmLVutgBM3GboW3MdzYD90fK/Ly4sMiDIF6Xof2UxiPK/25I74n1iYiXs2haAbytqTSrZBuiNrqp9WP0ndKuCEwHdM34pUKgVAMM4AeA2n1b/CROry5s3b3b8uSYqAHyfiuOsZ9P29Fjg3O3rgu7YOAmgCUBZDKIC4DYT5fS06coy66pFN1sAWc//1yqNj3z8t+WCq3feFt+wDeCBoDRivAJAE6DbfCv/J0wExU4Cu4nLf0zfxpgWH6sWtsWr6SX/VtNzd6gAdMtGdbwkQTAiwApfg4srq0sT4399TdJ8fdw2zS35t/pXvj5um4wnAM3mbnoAcI/PL9C7dmW/f9bJ6t5EAuDrTXu6VUMjYHd8av5rp5ULGgG7Yzw2lmQXCQByoUjXz/ocREkAurPgaQKgGsskAN3YZWcLQNiUBwCkytfqRXEE5ZKEZhOAXQwCAgDAOvNbABwDBIDcY7u3OzZOyBlPAAD0x0SjYVZ8fuw2jHh8bJoEwH3GBwHBXSbOsGfFxPS9ThrYTJyk6GYqoWtIALqz2+MgyswX5w1TAcAqviYBJh63Kx3spq4bTpuvj9um/dv2iI8q2/183AUzzDFArOLri/Tly5cla65UAHxN0kxUafJGV9E+9k1Vtu0VdMfWXQBGkQC47cqVK+Kja9euSZa6GWKTdRLg6/fIRJKWR2MPPS6+qe5gwKwP2ALAKj5WAPQxZ7233M2goay3CvTv6mMw9TVxse3QUFl8c2hHWeA+EgCsoi/SvjVqvfTSS5K1boK6iXsJfAumum1BD0BvtALg0zaAPl4aAP1AAoAHmAioaXr11Vcla91ckmQiAThz5oz4xLd/Uy7RbdPjj+wXXxzz6LEWHQkAHvDKK6+IL7QUbqIprpugbuJGRd+2AUgA+nNiZ/bXXaehPLgrqgB8QuAHEgA8QMvLvgSX06dPiwndNPaZulLZ1N+9Xxr8fZ4x4QItqU94kATUHj0k8AcJANblQ3DRJMXUXvjBgwc7/lztFzhwIPsXa18SNV8SFddNRsHV5V4A3aY49khF0Bsb1ycbTwC4IcoPGlxc32f+2te+Jib0Esy7SRj6Yeo56JUGf1b/6dBegDMf/py4SEv/k6z++9Jo3hbTNAEgImNdLr94m3xsvQRzExUApc/B888/Ly7Sx8bqP126v+7iVoCW/un89w8JADakjWZf+cpXxDXa9W8ysPRaATA1OlgrNa5tBei/nS9/+cuC9J0afkqqDp2z15U/pX8v1ekBwKb07PZXv/pVcYWuKk0+Hh0A1Gs5/5lnnhFTNFFzqVqj3yNK/9k5/5EvSMWBewI0+Nd2Ufr3lfEEwEajA/qjXdwulJk1GdFVpclBRf3s5T/55JNiSrLidiHoavA3MZuhyLQf4OJfHrOaBBD803WjWYAmwBsWGh3QPy0zP/fcc9amBCbB33SA62cVr8mDiaFACX1ubCYB+m9D/41w5t8MTQJe2/uc8Z4A/bqndj9F8E/Zu6YTgFAamgDUBeiAruo++9nPGg8w3//+942v/FU/5f/EkSNHxCT93jzxxBPGT3Do19V/G6z8zdOegDOPfS7uxM+aXvP72p5/kIkP+TGYCJsIwob5LYAmWwA+SwKMNuFlHZCTFeW3v/1tK5WHEydOSL/Gx8eNNQO20y0bU/vw+m/BRmKI+44/UpGLf3EsszG8yar/tT3P0e2fEUtbAKHRUwAkAPmQvOhnUe7VYK9/viYaNleUaZzl1+CvSYAN+r3R51CTgSyCc/Lnm0gGsTUNzGcfOyrzH/3HOBFIoyKggX8yKvXrn8mqP1s2YuNgtA9wQwIxhibA/Eg68jUA6FE5DXT9jMHVo2wa8DWw2A4ouvffzfjfzejzoiV5W38n/dr6pn8nfesnsdHvuX5/bP59sLkkEVAzt34dvb0ul27XpX73Rse//+hDj8e3+rl03DDvzCcApfqgGNZYJgHIGw0KSWDQoKnJgAYZ3UPXhGC9Enjye65duxY3+GngdymgpFH+TyRVANtDcfT7o2/JqOKkSVG/Z+slO/r9WPs9oszvFx0clFzOo1NY68s34vcLbRNZdZW/K3rTEwUa/PXnMM9OBYAmQKSoPRlYS4OMDwFEg3Vaq//2P9OVVbM+Bg3m622vaHLAyj6fNLjH+/c7RgTuedd0dTxsLpi/C2CZwYNF5UPw16pFFnv2Gli//vWvi+sI/oAdN6zcBdA0WwHQEhTgKi39p736Tzz77LPG7ggA4BfjWwABo4CBezQ4a5DO0ne+8x0rxwIBuM14g/xA8K7xQUBcBwwXaelfg3PWtLrgw1YAALOMx8Y74Y2SbDN/GyBHAeGaLEv/a2mVwdZsAADusTQfp1GSJQsJAEcB4RAN/lmX/tf6xje+QT8AgJiV5vghTQBGa3UxjG0AuEIH46R55r8b3/ve9+KtBwDF1rBxSd5Ha/eaAI1G5AVOAjhNr7EtQmDSITi6ErdFmwF/9KMf5f65tpVgAb6wsCiOv6CVBID7ANyWBKY8d6tr8Hfh76h9B3lOArTXgQQA2NyC6QQgbDX/JwlAXQxiGJD7NDB997vflTzSvXeXEpy8JgGaZBH8ga2ZnwEQtlUAwnBBDKIHwA86K/6FF16QPNEVqYvVjSQJ0KCZB5rMaI8DMw+Arc2bXhQ3Jd6Ht7IFQAXAH9odn5ckQPf7be75b0WTgJ///Ofer5o1+GsyY+pYJeA742OAA5nTdysJQFgXgzq9lhJu0CTghz/8oberOQ1IP/vZz7w5e68JgCZdPm4JJL0VBH+gc3N3rotZ7VsAQVAXg3S/g2FAftHtAA2ivgUlDfq6qtZriX2iSZcGUj2m6At9rAR/oDtW4uFgaV7ftRKAkvkrgetLbAP4JilR+xCUtNFPqxZa8ve1cqHPt44n9qEaoM8z9xwA3bOyJX4nbOsBWLKQANAH4CV9gXc5KOlj0semK1GtWuSBVgN++ctfOvmca6Ll0/YK4JoFO1vibT0AozWNxmaHAdEH4LUkKOl+tQtBSQORBkh9TKbH+priUiKgiaCu+jXR8m17BXCJlSFArZgvg6s+KDIshphvekAWNAHQLYGXXnpJfvKTn8hbb70lpmgQ0qmF+vXzstrvhCYC+nb58uX4eX/11VflvffeExM02H/+85+Pv3435f4st43YdoDP6paGAKm2BCCMSgJBWQxhCyA/dK9aEwF9e+WVV+KgdOXKlUyCUhL0NeDr+yK/+OtzkCQ++rxrIqBJQdpJmD7HGsCT570XJq5aBnw0t/S2GNU29+d+AhDKggRiTJ37AHLpyJEj8ZvSYKSJgL7XZODatWvd/FFx4NFStwYdXXlqmZ8O8/W1P+9vvvmm/OpXv4qfb32vP9ekoJOETJ9zfdPnWo/0Jc89gGwYr4YH61cA6mIwA9Cyhx59GA6GBPmUrFDbB9toQEoC0dqV6s6dO+Pgo0E+CUTonj5/+pYkBAl93vVNE4L1fk/7ewDZs3Mk/v7cn/sJgOFZAEqPAla27xUUB6tJe5KkiiAPuMF4+V81g7nkh6V7H1yWOTHsqo2/PAAADrhqpxn+XgPe/QRgtFYXw0cB55Y4CQAAKCYrF+ON1tapAKjA7EAgjgICAIrK/AmA1ZX+1QlAM7wqBs2xBQAAKCjji+C2I4CqtOZXjfYBaAeklRIIAAAW6Swc4ycAgs0qABZOAtAHAAAomqt3LFTAB4PX2n+6OgGwcBLg0u0FAQCgSKz0wN3ZbAvAwkkAtgAAAEUza37x22g/AaBKD3yK4ZMAs1QAAAAFY74C8GCP34MJgOGTADQCAgCKxEoDYCgPxPbSOp9FHwAAABmx0gDYdgdA4sEEYCCYFcM4CQAAKIrZxboY13YHQOLBBGDJbA+AYiIgAKAorAzBG63Nrv1QaZ1PaqwdFpA1fTLMX4kIAIB5s7frYlS4fkwvrfvJFhoB525TBQAA5JuVk29B0EUCYKERkKuBAQB5Z+UK4FI4u+6H1/1kC42AM7d+LQAA5NnMrdfFuKX1q/rrJwD74mlBRg/nczMgACDvLDS9PzABMFHa5DcZvxnQytEIAAAM0P1/8w3vG2/pb5wAhGYbARV9AACAvLKy/x/KpY1+aeMEoCkzYhh9AACAvLKy/9+U2Y1+yZktgPgLMg8AAJBTxs//t/SwBWBhIBDzAAAAeWTl/L8OANJYvoHSpr+5GV4Swy4sWiiRAACQoQsf2Nji3jyGb54ABBvvHWTFyh4JAAAZslIBGAwubvbLmycAy+YTgPrdRvwGAEAe1Jcbdm69vdNPBcBCH4C6QBUAAJATs4vu7f+rzRMAZaEPgOOAAIC8OPe+8bE6stX+v+ogATA/D4DjgACAPIin3No4/tdB7N46AWidITS6Kc9YYABAHlyy0fynRmuzW33K1glAaw/BfB/AB/QBAAD8dt7Klvb61/+u1UkFIPqzmhfEsBnmAQAAPGdlMRuGHcXszhKAgWBWDGMbAADgMzu3/0WancXszhKAffFdwnUxjKmAAABfnX3f+O65qkdb9x194c4SANVhSSFNZ60cnQAAoH92GgA7r9h3ngBYOA7INgAAwEda/rcy1Xa5ea7TT+08AbBwHFCxDQAA8I2l8n+jk+N/ic4TAEvHAXUbgKFAAACfWOn+73JybzcVgKi0EHZcWkiLbgPM3bZwiQIAAD3Q+2ysLFwHg/PdfHp3CYCY7wNQU+8Zv44AAICenLFT/hdZyrIC0NoGmBXDuBsAAOADvfrXzo224WwUo+vd/I5uKwBWpgLqNsC5P3MkEADgNitX/6pScFa61H0C0Oz+i6SBK4IBAK47ffOKWNFl+V91nwBY2gbQM5XMBAAAuErL/3NLNprWuy//q+4TgPhrmd8GUNauVQQAYAu1G5Ya1ku9VeZ7SwAsbQNM//kKzYAAACdZW6T2UP5XvSUAlrYBWqOBqQIAANyiQ+usjP7tsfyveksA4q9pZxvg9M3LAgCAS87Zuryu1HtFvvcEoLUNYDzd0WZAO00WAAA8SJv/Zm/XxYql3m/qHZRe6TbAG3rpQDAmhumM5cquvVJkL7zwgmRl3759AgDojLXmP4kW4qOTPS/Ee08A1LKclgExngBoM+CJRw/IcDAkRXXw4EEBANilvWnWmv8Gwr7G8/e+BaBa1w4a3wZgMiAAwAUzt1631PwndfnYZF+9eP0lACoMT4sFZz8gAQAA2GXvsrpgVvrUfwLQNH8cUM3duc5kQACANdqUbmn1H23BN6ekT/0nAK1tgFmxgGuCAQC2TFlr/uv97H+7/hMAZWkmAPcDAABssHr0r5TONN50EgBLMwHUOXoBAACG2Tv6F8XaPs7+t0snAdCZAGF4TizQDkzuBwAAmKKrf2uT/ySYWRnH37d0EgDVlL7OI/ZKjwSefs/S/csAgMKxuPpPpfkvkV4CYLEZkFsCAQAm6Orf3tX06TT/JdJLANSynW0AqgAAABPOWbv1T1Jr/rv3x0m6dBvAyjNDFQAAkCVd/Z+1tvcvddk3meoiO90EoNUMaGUyIFUAAECWZhctDv5JYfLfWmlXALQZcFosoQoAAMiK1eFzKTb/JdJPAOLjCSEnAgAAuXHW5t5/fO1ves1/ifQTAKXXBFtCFQAAkCbd+7e8+s8kpmaTAFg8EkgVAACQJqud/62jf3OSgWwSALUcpr5f0SmqAACANFju/E/96N+qP1qy0qoC1MUCqgAAgDTYXf2nf/SvXXYJgAqb9AIAALykq3+rY39LUpMMZZsAWLwlUKsAUza/cQAAr9XsxpBMV/8q2wTA4mAgNX3zSpzBAQDQDbs3/knmq//Wl8haazCQtSg8/qdUrk0GABSI9dX/Upj5A8g+AbBcBZi9vSCzi3UBAKATGjesrv7D8FwWg3/Wyj4BUJarAFYHOAAAvDL+jtXKcT2KmWfFADMJgANVgNM3ORYIANic3ZG/Ymz1r8wkAMpyFaAWVQE4FggA2Ij1kb8GV//KXAJguQrAsUAAwGZ0gFxRVv/KXAKgLFcB9Fjg3NJ1AQCgna7+dYCczYdgcvWvzCYAlqsA6uS7LwsAAO2e/sOPxSrDq39lNgFQlqsA1o93AACcoo1/c0tvi0XGV//KfALgQBVgovEyDYEAABca/1pT/wyv/ltf1gbLVQAaAgEASif+WW38MzDzfyN2EgCtAiyHJ8UibQhkQiAAFJf1ef/KwMz/jQRi08LUa9EjqIgl5cFhmf/oPwoAoHhGf/ei/dX/xydHxRI7FYBE024VQL/xbAUAQPHovr/l4G919a/sVgDUG1MXo/+vikWv7f0HqWzbKwCA/NPS/+hvXxS7wln5eO2wWGS3AqCWwymxjNkAAFAch3//A7FuWcbFMvsJwGht1vaxQC4LAoBicKL0L8FZG8f+1rKfAKhmvA9i9TuilwUxJhgA8ktL/zX7fV91WW5ar3wrNxIAB4YD6WyA8Xd+KgCAfHKi9G9h5O9G3EgA1EitJpoZWTR357qcbNAPAAB540bpP4pxrVjnBHcSALUcWm+KYEAQAOSLI6V/68f+1nIrAdCGQJFZsWz83Z9yVwAA5IC+ljtR+tfGP0sjfzfiVgKgWlUAu6OZGBAEALkw8e7LLpT+xZXGv3buJQDaHGG5IVDpVsC59+cEAOAnvebXievfw3DKlca/dvYnAW7kjan56P/LYtFwaSieElgeGBYAgD903//T1/81PuFl+6HYnPe/GfcqAAkHGgL1H87Tf/w3AQD4Rff9HQj+GsueFke5mwA4MCFQcTQQAPziyJE/WZn45+xesrsJgHJgQqDSfoCZW68LAMBtuu/vxJE/hyb+bcTtBEAnBDqwFaDG37kQ7ykBANykr9G6+neCnvl3sPGvndsJgBqtzYgDswGSfgDmAwCAm3Tf35nSv2Nn/tfjfgKgHJgNoLQfgPkAAOCek66c9/eg9J8YEB+cnm3IxKHbEgSfEcsu33lLdpeG5OCOfQIAsE/L/v9y8/+KE0oyISM1L1aK7s4BWM8bUxej/6+KA3Q+QGXbXgEA2KPXuOt5fzdEpf+Pf9OJvrVO+LEFkHBkK0BpPwBNgQBgj74GOzSrxZvSf8KvBEA7KpfDk+IA3WuiKRAA7Egu+XFk39+Lrv+1/EoA1GjtbFRmmREHxEOC3mVIEACYNtVwZdiP8qPrfy3/EgC13NStgLo4QIdOcDIAAMzRpr/pP18RR3hX+k/41QTYbr5WlYHgojji7GOfk2OPVAQAkJ3TN6/IhEvj2ZfDw/Hoeg/5WQFQjtwVkJhovBJ3owIAsqGvsU4F/9Y1v7PiKX8rAImFqdeiv4UTS+/y4LBc/Mu/4/pgAEiZdvw71fTn8DW/nfK3ApBoxlctujH+6e7KP1COBwJAahwM/o249O85/xMAPXYRutOAwfFAAEiPvpbGc1fcCf4SxxzPjvytx/8EQI1MTUd7Mc4cwdDjgeN/uiAAgP7oa6m+projOBvHnBzIRwKgmjIhjhwNVDO3XpeTLjWrAIBndM6KvpY6RI/8OTGMLg35SQBGa7on40w/gJq+eYUZAQDQA8fO+qvGypG/3DR5+XEbYKdOz1535dbAxOzthfioRXWoLACArWnwr7m2eAqb/yzlqX+XHMlXAqCmL12WieruKAk4KI4gCQCAzrgZ/MPT0b5/TXImfwmAOlG9HFcBAnHmvl5NAkYHd0llO1cIA8B6dMrfP934D3FMXUZqfys5lJ8egHa6R+PQfIDE8Xd+KufenxMAwGr62ujUlL+Weh7O+28knwmAal0d/LQ4hiQAAFbT10R9bXTOcjieh/P+G8lvAqDi+wLcO7JBEgAALc4Gf8/n/HfC/7sAOrFQOytBcEwcww2CAIrM4eB/Otr3n5Ccy3cFIKFDgkJxbslNJQBAUTkb/FtNf7kP/qoYCcD9psC6OIYkAEDROB38c9z0t1YxtgAS87WKDAQXox85d1/v9PBTcmLnAQGAPHM4+Oukv0/nuelvrXzOAdiITgr8x+rbUgrGxDH/vvifDAsCkGs65Gei8Yo4aTn8UhT8L0uBFCsBUKdn52SiGkgQVMUxTAwEkFdOTvhLaMd/ufZdKZjiJQBqenbWtXHBCZIAAHnjePDXjv9/kgIqVg/AWm9MaT9AVRw0sfOAnBp+SgDAZ3qlr2O3+rUJZuTj33RuYJwpxTgFsBGdFOjg8UClVwk//ccfSyNcFADwjb526WuYu8FfO/6b41Jgxa4AqPlaeeVkQFkcpJcHnf/IF6Q84NzBBQBYV325EQX/f5O5O9fFUa3jfgXq+F8PCYByPAkoDw7Lxb/8O5IAAM7T4H/49z+Q+l2n7mJrR/BfUewtgMT9i4Oc/Ber/yHpf1BzS85m0wAQv0Y5Hvwb8Ws9wT9GBaDdfK26UglwFgODALiodZ3vK9JoOty31Br0w+jVFVQA2unNT3r9o8P0vuwpV4/TACgkPean0/2cDv4SX+1L8G9TzDkAm4kHBR26IUHwGXGUzgq4ES7KwR37ZCgYFACwQTv9/8e7P49PLTlNr4UfmSrcoJ+tsAWwkYVaLUoCJsVhNAcCsMWDTv8WnfI3Er2e4wEkAJvxJAnQY4KVbXsFAEyYXazL+Ls/dbnZr4XgvykSgK14kAQomgMBmHA6KvdrL5LzCP5bogdgK617A5y8PKid3iaofQGfGforAYC06X7/Pzf+Q2rvedCETPDvCBWATnlSCaAvAEDavNnvVwT/jlEB6JQnlQA9hnPh1uuyuzQUjxEGgH7MRK8nf/uHH7q/368I/l0hAeiGR0mA/kfLtcIA+qE3+Z2M9vsXw7viPIJ/19gC6IUn2wGKLQEA3fKq5K8I/j0hAeiVR0nAcLQdoKcEjj2yXwBgM16M9G1H8O8ZCUA/PEoC1PEoATi1+ykZDoYEANppl/9U45JM/9nxqX7tCP59IQHo18LkhASlU+IJtgQArOXNYJ92rfG+04KekQCkYb52XAaCM+KR2qOHZHLXIQFQbNro59WqPxaOy8drZwV9IQFIy3ytsnKVsDdLa6oBQHHNLV2X8Xd+6k+jX0tDlsOn45tb0TcSgDS1koDz0Y/K4hGqAUCx6DhfnejnTaNfS30l+HOlb0pIANI2XyuvVALK4hGqAUD+6apfS/56pbhnNPgfjoJ/XZAaEoAseJoEKKoBQD5N3bjkxxz/tUKZk2a88q8LUkUCkJX52rAMlM5E/3rHxDNUA4D88LLD/55wVpZFg7+PD955JABZW6hNSxCcEA/p3ACtBpAIAP7x8lx/uzA8LSO1CUFmSABM8GxgUDutBui2AFMEAX+cff9qPMPfsya/+xjwYwQJgCnztbGVWQFeLqf1ZsHzH/kC1QDAYR43+SWiUn94kjP+ZpAAmORxc2BiYucBORG9kQgA7vC+3N/CMT/DSABMy0ESwLYA4A5Pz/SvRqe/FSQAtnjcHJjQRODM7s9JdagsAMzS7v6pKPB7XO5vCcNz0pQJOv3NIwGwyePmwHacFgDMqS83ZPxPF/wP/IoLfawiAbBtvlZdaQ4si+dIBIDs5GSfP8FMfweQALggB30B7eL+gA/tJxEAUqCB//R7V+LA7/U+f4L9fmeQALgkB30BCe0POP7wfhIBoEe5C/xKh/s0pcZ+vxtIAFyzMDkhQUn7AnIRNTkxAHQnl4FfS/5hc4r9freQALgoZ1sCKkkEDg2NUBEA1pHTwK+4yc9RJACu0suESqJbAsckR9gaAFbLceCn5O84EgDX5WxLIKGJQHXHCKcGUFi5DvyU/L1AAuCDHG4JtOP4IIpEB/ic/eCqXLj1eh4DP13+HiEB8ElOBgdtJK4IPHqIyYLIpdxM7tsMV/h6hQTANzkaHLSRpGHw6MOPy3AwJICvtMx/7s9X5ez7czK39LbkmDb6jTPYxy8kAD7SLYGS1PLWILgWfQLw1dyd63GZ/9z7V/NZ5l8lmJHl5jiNfv4hAfDZfO14VA3QLYGy5JwmAscfqTBPAM7S1f7srbqc/vOVfJf572usrPpnBF4iAfBdQaoBCaoCcI3u7V+KAn5Ou/k3EM7KsozT6Oc3EoC8KFA1IFHZvlcmPnSA4UIwLtnbn7n166Ks9hMc78sREoA8KVg1oN3YQ49H2wOV+D2QBQ36c7evx5382tBXnNV+glV/3pAA5FEBqwGJ4dJQKxl4eD/HCZEKLfHPLL5ekIa+dbHXn1MkAHlV4GpAIukXIBlAtwj6Kxjlm2skAHn3Zq0izeC8FLAa0C6pDBx96BNRMjDCfAGsEnfwLy7IhQ9+HQf+Qgf9Fs71FwAJQFHkfIpgt5JjhTQQFlf9biMex6uNfMXc019XY2WaX02QeyQARcK2wLr0NMGhKCEYG3qcrYIcS5r4dIWvgV8TALSjya9oSACKqMBNgp3Q6sBYtFWwf9seEgLP6V7+1Wh1zyp/U5T7C4oEoMha2wJaDSgL1qW9A5UoESAhcF+ywifgd4xyf8GRABQd2wJd0wrB/mjboLqjHG0f7KGHwBIt4esQnrmlKOjfuU7A7wbd/RASACQ0EWjdMlgVdCWpEmhCoIkBSUH6NNhrgJ+9XZeFlcBPsO9FvM8/RbkfigQAq9EfkIokKdCEYDRKBnT7oLJjL8cPt6Bl/PpSK9izsk9RKHPSDE8S+NGOBADrIxHIxNrEYGRwOKoW7JLytuHCJAdJkK8v34hX83p17tzdt+NVPoE+dY1oi29C9k2eE2ANEgBsjkTAmCQ50PeaGOwOhu4lCPoxH5IEDe6N5cU4mGuAvxEF9PnlRhzo9ecEeWMaK/v80+zzYyMkANhaq1HwOCcG3KAjjjUhGA52rLwfkl0DQ3HCoD/fVWolCcnntIs/Vto4iVh7Nl6DdkKDuQbvd6Mgf2N5ceXXG/c+h3P1TiDwo2MkAOgciQDgKgI/ukYCgO6RCACuIPCjZyQA6B2JAGALgR99IwFA/zQR0PkBNAsCWSPwIzUkAEgXpwaALNSjV+tpuRueI/AjLSQAyEYrEdCtgaoA6BGT+5AdEgBka75WiQeRcNcA0IVwJgr8pwn8yBIJAMy4f+nQIWF7AFgP+/swigQA5rE9ALSJyvyl4KwshRcI/DCJBAD23K8KHI1+xvV5KBJd7Z+LVvszlPlhCwkA7JuvafAfoyqA/ItW+0EwQzc/XEACALfQK4D8Sfb2dbU/J4AjSADgrvnaWJQMjHGCAB5qrBzho5MfziIBgPvYIoA3KPHDHyQA8Mv9scMkA3AEQR9+IgGAv0gGYA1BH/4jAUA+3EsGSkejF+eqcKwQ6dI9/bloT/9c9OMZgj7ygAQA+TRfq65cVcxpAvQorEsoF+LufZE5gj7yhgQA+af3EQxGiUAoY8JWATbWWuW3Svs6la8uQI6RAKB4WtUBTQYORS/2FUFxhaGey7/EKh9FRAKAYmsdMdSEoCokBPl3P+DPRu9nCfgoMhIAoF0rIajECUGrf0ATAhoK/dQq6YdylRU+8CASAGAr2kOQJAUi+6kSOEpX90Epeove3w0vMXYX2BwJANAL7SMYDPZLMxyNEoL9QqXAJJ2tX18V7EXqrO6B7pAAAGlpVQr0MqNKFJz2S9gsUy3oy9pAvyCtMn5dAPSNBADIWisxGL5fMSiNrCQHZaFqoPv00VsU5MPmgpSCeQI9YAYJAGBT0nTYShBGogRhd1w9kHA4Wv0Oe54krAT3oB6/hc0bbQG+LpTtAatIAAAftEYdD696K61MONSKQiws3/v8OHloTxyCsnRuJXC30yAev2+0fl2/RnMhft+UlV+L37d+ndU74Lz/D1GUpuezuTdmAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

function PoliticsIcon() {
  return "PoliticsIcon";
}

function BotTalkIcon() {
  return "BotTalkIcon";
}

function CaretDownIcon({ className }) {
  return (
    <svg
      width={30}
      height={18}
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.144 1.29c.669.669.669 1.754 0 2.424L15.406 17.452a.572.572 0 01-.809 0L.86 3.714a1.714 1.714 0 012.425-2.425L15 13.007 26.72 1.289c.67-.67 1.755-.67 2.425 0z"
        fill="#0045F4"
      />
    </svg>
  );
}

function GenericIcon({ color }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16.0006" r="16" fill={color} />
    </svg>
  );
}

export {
  DpaNewsIcon,
  DpaSelectIcon,
  DpaAgendaIcon,
  DpaVideoPortalIcon,
  DpaShopIcon,
  DpaPictureAllianceIcon,
  PoliticsIcon,
  BotTalkIcon,
  CaretDownIcon,
  GenericIcon,
  LogoIcon,
  FullLogoIcon,
  Icon,
};
