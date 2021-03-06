import {
  BotTalkIcon,
  DpaAgendaIcon,
  DpaAudioHub,
  DpaNewsIcon,
  DpaPictureAllianceIcon,
  DpaSelectIcon,
  DpaShopIcon,
  DpaVideoPortalIcon,
  F23,
  Icon,
  Minty,
  NewsAktuell,
  PoliticsIcon,
  Tnn,
} from "../components/icon/icon";

export default [
  {
    title: "dpa-News",
    excerpt: "Das Nachrichtenportal der Deutschen Presse-Agentur",
    description:
      "Was sind die wichtigsten Themen der Stunde? Mit dpa-News ermöglichen wir redaktionell Verantwortlichen einen schnellen Zugang zum Informationsangebot der Nachrichtenagentur. ",
    images: [
      "./images/applicationCards/dpaNews/news_mockup_2x.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={DpaNewsIcon} />,
    tags: ["aktuelles"],
    link: "https://sso.dpa-id.de/goto/register?product=dpa-News",
  },
  {
    title: "dpa-Select",
    excerpt: "Ihr persönlicher News-Ticker in Echtzeit",
    description:
      "Erhalten Sie jederzeit alle dpa-Inhalte und bleiben Sie über wichtige Themen auf dem Laufenden. dpa-Select liefert alle relevanten News aus den dpa-Diensten in Echtzeit und nach Ihren Bedürfnissen gefiltert.",
    images: [
      "./images/applicationCards/select/select.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={DpaSelectIcon} />,
    tags: ["recherche"],
    link: "https://sso.dpa-id.de/goto/register?product=dpa-Select",
  },
  {
    title: "dpa-Agenda",
    excerpt: "Termine und Themen für Ihre Planung",
    description:
      "Wann beginnt morgen die Online-Pressekonferenz? Welches Thema beschäftigt in den nächsten Wochen die Medien? Mit dpa-Agenda finden Sie Themen und Termine schnell und gezielt in einer minütlich aktualisierten Datenbank mit über 10.000 aktuellen Branchenevents. ",
    images: [
      "./images/applicationCards/agenda/agenda.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={DpaAgendaIcon} />,
    tags: ["planung"],
    link: "https://sso.dpa-id.de/goto/register?product=dpa-Agenda",
  },
  {
    title: "dpa-Audio Hub",
    excerpt: "Eine Plattform – alle Töne",
    description:
      "O-Töne, Interviews, Atmo – im dpa-AudioHub bieten wir unseren Schatz an Audio-Inhalten sowie Inhalte von Partnern in einem übersichtlichen und schnell durchsuchbaren Audio-Baukasten zum Download an.",
    images: [
      "./images/applicationCards/audioHub/audio hub.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={DpaAudioHub} />,
    tags: ["audio"],
    link: "https://sso.dpa-id.de/goto/register?product=dpa-Audio%20Hub",
  },
  {
    title: "dpa-Videoportal",
    excerpt: "Tagesaktueller Video-Content",
    description:
      "Auf dem dpa-Videoportal haben Sie Zugriff auf tagesaktuelle Beiträge und Rohmaterial aus allen Ressorts.",
    images: [
      "./images/applicationCards/video/video.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={DpaVideoPortalIcon} />,
    tags: ["video"],
    link: "https://sso.dpa-id.de/goto/register?product=dpa-Videoportal",
  },
  {
    title: "dpa-Shop",
    excerpt: "Inhalte fürs Netz – ready-to-publish",
    description:
      "Erhalten Sie Liveblogs, interaktive Grafiken und weitere Embed-Produkte der dpa schnell und unkompliziert über unseren Onlineshop.",
    images: [
      "./images/applicationCards/shop/shop.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={DpaShopIcon} />,
    tags: ["aktuelles"],
    link: "https://sso.dpa-id.de/goto/register?product=dpa-Shop",
  },
  {
    title: "my news aktuell",
    excerpt: "Content unkompliziert verbreiten",
    description:
      "Die dpa-Tochter news aktuell bietet mit den Marken ots, zimpel und dem Presseportal innovative Lösungen für die erfolgreiche Kommunikation an Medien und Verbrauchern. Übermitteln Sie mit Hilfe des Auftrags­systems Texte, Bilder und weiteres Pressematerial.",
    images: [
      "./images/applicationCards/na/news aktuell.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={NewsAktuell} />,
    tags: ["distribution"],
    link: "https://sso.dpa-id.de/goto/register?product=my%20news%20aktuell",
  },
  {
    title: "TNN-Videoportal",
    excerpt: "Tagesaktuelles Rohmaterial für Fernsehsender",
    description:
      "Das TNN-Videoportal versorgt öffentlich-rechtliche und private TV-Stationen mit tagesaktuellen Videos zu den relevanten News-Ereignissen und Entertainment-Themen.",
    images: [
      "./images/applicationCards/tnn/tnn.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={Tnn} />,
    tags: ["video"],
    link: "https://sso.dpa-id.de/goto/register?product=TNN-Videoportal",
  },
  {
    title: "dpa-picture alliance",
    excerpt: "Das Portal für visuelle Inhalte",
    description:
      "Mit der dpa picture alliance stehen Ihnen mehr als 100 Mio. Bilder, Grafiken und Illustrationen von über 300 Partneragenturen weltweit zur Verfügung. ",
    images: [
      "./images/applicationCards/pa/pa.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={DpaPictureAllianceIcon} />,
    tags: ["visuals"],
    link:
      "https://sso.dpa-id.de/goto/register?product=dpa%20picture%20alliance",
  },
  {
    title: "Polit-X",
    excerpt: "Individuelles Politikmonitoring zu Ihren Themen",
    description:
      "Der dpa ID Partner Polit-X ermöglicht datengetriebenes und dokumentenbasiertes Politikmonitoring und Parlamentsanalysen.",
    images: [
      "./images/applicationCards/politx/polit-x.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={PoliticsIcon} />,
    tags: ["recherche"],
    link: "https://sso.dpa-id.de/goto/register?product=Polit-X",
  },
  {
    title: "BotTalk",
    excerpt: "Leser zu Zuhörern machen",
    description:
      "Unser Partner BotTalk bietet eine Text-to-Speech-Lösung, die Nachrichtenartikel mit einem Klick in Audio-Dateien umwandelt.",
    images: [
      "./images/applicationCards/bottalk/bottalk.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={BotTalkIcon} />,
    tags: ["audio"],
    link: "https://sso.dpa-id.de/goto/register?product=BotTalk",
  },
  {
    title: "Minty Illustrators",
    excerpt: "Illustrationen finden und beauftragen",
    description:
      "Mit unserem Partner-Tool Minty finden Sie in Sekundenschnelle die richtigen Künstler für Ihre visuellen Produktionen. Das All-in-One-Tool bietet Kontakt zu 3.500 verifizierten Illustratorinnen und Illustratoren und unterstützt bei Lizenzierung und Projektmanagement.",
    images: [
      "./images/applicationCards/minty/minty.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={Minty} />,
    tags: ["visuals"],
    link: "https://sso.dpa-id.de/goto/register?product=Minty%20Illustrators",
  },
  {
    title: "23° Atlas",
    excerpt: "Datenvisualisierung leicht gemacht",
    description:
      "Mit unserem Partner 23° Atlas können Sie Ihre eigenen Statistiken publizieren oder Millionen von thematischen Statistiken einfach weiterverwenden – ob regionale Corona-Daten, Wirtschaftsstatistiken oder Studienergebnisse. Die automatisierten Statistiken funktionieren auf Websites, in Präsentationen oder Pressemitteilungen.",
    images: [
      "./images/applicationCards/23degrees/23degrees.png",
      // "./images/applicationCards/mockups/img1.jpeg",
      // "./images/applicationCards/mockups/img2.jpeg",
    ],
    icon: <Icon Component={F23} />,
    tags: ["daten"],
    link: "https://sso.dpa-id.de/goto/register?product=23%C2%B0%20Atlas",
  },
];
