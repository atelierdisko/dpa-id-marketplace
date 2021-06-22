import {
  BotTalkIcon,
  DpaAgendaIcon,
  DpaNewsIcon,
  DpaPictureAllianceIcon,
  DpaSelectIcon,
  DpaShopIcon,
  DpaVideoPortalIcon,
  GenericIcon,
  Icon,
  PoliticsIcon,
} from "./components/icon/icon";

export default [
  {
    title: "dpa-News",
    excerpt: "Das Nachrichtenportal der Deutschen Presse-Agentur",
    description:
      "Was sind die wichtigsten Themen der Stunde? Mit dpa-News ermöglichen wir redaktionell Verantwortlichen einen schnellen Zugang zum Informationsangebot der Nachrichtenagentur. ",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaNewsIcon} />,
    tags: ["aktuelles", "daten"],
  },
  {
    title: "dpa-Select",
    excerpt: "Ihr persönlicher News-Ticker in Echtzeit",
    description:
      "Erhalten Sie jederzeit alle dpa-Inhalte und bleiben Sie über wichtige Themen auf dem Laufenden. dpa-Select liefert alle relevanten News aus den dpa-Diensten in Echtzeit und nach Ihren Bedürfnissen gefiltert.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaSelectIcon} />,
    tags: ["planung", "daten"],
  },
  {
    title: "dpa-Agenda",
    excerpt: "Termine und Themen für Ihre Planung",
    description:
      "Wann beginnt morgen die Online-Pressekonferenz? Welches Thema beschäftigt in den nächsten Wochen die Medien? Mit dpa-Agenda finden Sie Themen und Termine schnell und gezielt in einer minütlich aktualisierten Datenbank mit über 10.000 aktuellen Branchenevents. ",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaAgendaIcon} />,
    tags: ["distribution", "daten"],
  },
  {
    title: "dpa-AudioHub",
    excerpt: "Eine Plattform – alle Töne",
    description:
      "O-Töne, Interviews, Atmo – im dpa-AudioHub bieten wir unseren Schatz an Audio-Inhalten sowie Inhalte von Partnern in einem übersichtlichen und schnell durchsuchbaren Audio-Baukasten zum Download an.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#FD7239" />,
    tags: ["audio"],
  },
  {
    title: "dpa-Videoportal",
    excerpt: "Tagesaktueller Video-Content",
    description:
      "Auf dem dpa-Videoportal haben Sie Zugriff auf tagesaktuelle Beiträge und Rohmaterial aus allen Ressorts.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaVideoPortalIcon} />,
    tags: ["video", "visuals"],
  },
  {
    title: "dpa-Shop",
    excerpt: "Inhalte fürs Netz – ready-to-publishr",
    description:
      "Erhalten Sie Liveblogs, interaktive Grafiken und weitere Embed-Produkte der dpa schnell und unkompliziert über unseren Onlineshop.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaShopIcon} />,
    tags: ["recherche", "daten"],
  },
  {
    title: "my news aktuell",
    excerpt: "Content unkompliziert verbreiten",
    description:
      "Die dpa-Tochter news aktuell bietet mit den Marken ots, zimpel und dem Presseportal innovative Lösungen für die erfolgreiche Kommunikation an Medien und Verbrauchern. Übermitteln Sie mit Hilfe des Auftrags­systems Texte, Bilder und weiteres Pressematerial.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#FD7239" />,
    tags: ["aktuelles"],
  },
  {
    title: "TNN-Videoportal",
    excerpt: "Tagesaktuelles Rohmaterial für Fernsehsender",
    description:
      "Das TNN-Videoportal versorgt öffentlich-rechtliche und private TV-Stationen mit tagesaktuellen Videos zu den relevanten News-Ereignissen und Entertainment-Themen.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#FD7239" />,
    tags: ["video"],
  },
  {
    title: "dpa-picture alliance",
    excerpt: "Das Portal für visuelle Inhalte",
    description:
      "Mit der dpa picture alliance stehen Ihnen mehr als 100 Mio. Bilder, Grafiken und Illustrationen von über 300 Partneragenturen weltweit zur Verfügung. ",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaPictureAllianceIcon} />,
    tags: ["aktuelles"],
  },
  {
    title: "Polit-X",
    excerpt: "Individuelles Politikmonitoring zu Ihren Themen",
    description:
      "Der dpa ID Partner Polit-X ermöglicht datengetriebenes und dokumentenbasiertes Politikmonitoring und Parlamentsanalysen.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={PoliticsIcon} />,
    tags: ["aktuelles", "distribution"],
  },
  {
    title: "BotTalk",
    excerpt: "Leser zu Zuhörern machen",
    description:
      "Unser Partner BotTalk bietet eine Text-to-Speech-Lösung, die Nachrichtenartikel mit einem Klick in Audio-Dateien umwandelt.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={BotTalkIcon} />,
    tags: ["recherche", "daten"],
  },
  {
    title: "Minty Illustrators",
    excerpt: "Illustrationen finden und beauftragen",
    description:
      "Mit unserem Partner-Tool Minty finden Sie in Sekundenschnelle die richtigen Künstler für Ihre visuellen Produktionen. Das All-in-One-Tool bietet Kontakt zu 3.500 verifizierten Illustratorinnen und Illustratoren und unterstützt bei Lizenzierung und Projektmanagement.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#0030AA" />,
    tags: ["daten"],
  },
  {
    title: "23º Atlas",
    excerpt: "Datenvisualisierung leicht gemacht",
    description:
      "Mit unserem Partner 23° Atlas können Sie Ihre eigenen Statistiken publizieren oder Millionen von thematischen Statistiken einfach weiterverwenden – ob regionale Corona-Daten, Wirtschaftsstatistiken oder Studienergebnisse. Die automatisierten Statistiken funktionieren auf Websites, in Präsentationen oder Pressemitteilungen.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#212121" />,
    tags: ["visuals", "daten"],
  },
  {
    title: "dpa-News",
    excerpt: "Das Nachrichtenportal der Deutschen Presse-Agentur",
    description:
      "Was sind die wichtigsten Themen der Stunde? Mit dpa-News ermöglichen wir redaktionell Verantwortlichen einen schnellen Zugang zum Informationsangebot der Nachrichtenagentur. ",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaNewsIcon} />,
    tags: ["aktuelles", "daten"],
  },
  {
    title: "dpa-Select",
    excerpt: "Ihr persönlicher News-Ticker in Echtzeit",
    description:
      "Erhalten Sie jederzeit alle dpa-Inhalte und bleiben Sie über wichtige Themen auf dem Laufenden. dpa-Select liefert alle relevanten News aus den dpa-Diensten in Echtzeit und nach Ihren Bedürfnissen gefiltert.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaSelectIcon} />,
    tags: ["planung", "daten"],
  },
  {
    title: "dpa-Agenda",
    excerpt: "Termine und Themen für Ihre Planung",
    description:
      "Wann beginnt morgen die Online-Pressekonferenz? Welches Thema beschäftigt in den nächsten Wochen die Medien? Mit dpa-Agenda finden Sie Themen und Termine schnell und gezielt in einer minütlich aktualisierten Datenbank mit über 10.000 aktuellen Branchenevents. ",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaAgendaIcon} />,
    tags: ["distribution", "daten"],
  },
  {
    title: "dpa-AudioHub",
    excerpt: "Eine Plattform – alle Töne",
    description:
      "O-Töne, Interviews, Atmo – im dpa-AudioHub bieten wir unseren Schatz an Audio-Inhalten sowie Inhalte von Partnern in einem übersichtlichen und schnell durchsuchbaren Audio-Baukasten zum Download an.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#FD7239" />,
    tags: ["audio"],
  },
  {
    title: "dpa-Videoportal",
    excerpt: "Tagesaktueller Video-Content",
    description:
      "Auf dem dpa-Videoportal haben Sie Zugriff auf tagesaktuelle Beiträge und Rohmaterial aus allen Ressorts.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaVideoPortalIcon} />,
    tags: ["video", "visuals"],
  },
  {
    title: "dpa-Shop",
    excerpt: "Inhalte fürs Netz – ready-to-publishr",
    description:
      "Erhalten Sie Liveblogs, interaktive Grafiken und weitere Embed-Produkte der dpa schnell und unkompliziert über unseren Onlineshop.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaShopIcon} />,
    tags: ["recherche", "daten"],
  },
  {
    title: "my news aktuell",
    excerpt: "Content unkompliziert verbreiten",
    description:
      "Die dpa-Tochter news aktuell bietet mit den Marken ots, zimpel und dem Presseportal innovative Lösungen für die erfolgreiche Kommunikation an Medien und Verbrauchern. Übermitteln Sie mit Hilfe des Auftrags­systems Texte, Bilder und weiteres Pressematerial.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#FD7239" />,
    tags: ["aktuelles"],
  },
  {
    title: "TNN-Videoportal",
    excerpt: "Tagesaktuelles Rohmaterial für Fernsehsender",
    description:
      "Das TNN-Videoportal versorgt öffentlich-rechtliche und private TV-Stationen mit tagesaktuellen Videos zu den relevanten News-Ereignissen und Entertainment-Themen.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#FD7239" />,
    tags: ["video"],
  },
  {
    title: "dpa-picture alliance",
    excerpt: "Das Portal für visuelle Inhalte",
    description:
      "Mit der dpa picture alliance stehen Ihnen mehr als 100 Mio. Bilder, Grafiken und Illustrationen von über 300 Partneragenturen weltweit zur Verfügung. ",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={DpaPictureAllianceIcon} />,
    tags: ["aktuelles"],
  },
  {
    title: "Polit-X",
    excerpt: "Individuelles Politikmonitoring zu Ihren Themen",
    description:
      "Der dpa ID Partner Polit-X ermöglicht datengetriebenes und dokumentenbasiertes Politikmonitoring und Parlamentsanalysen.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={PoliticsIcon} />,
    tags: ["aktuelles", "distribution"],
  },
  {
    title: "BotTalk",
    excerpt: "Leser zu Zuhörern machen",
    description:
      "Unser Partner BotTalk bietet eine Text-to-Speech-Lösung, die Nachrichtenartikel mit einem Klick in Audio-Dateien umwandelt.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={BotTalkIcon} />,
    tags: ["recherche", "daten"],
  },
  {
    title: "Minty Illustrators",
    excerpt: "Illustrationen finden und beauftragen",
    description:
      "Mit unserem Partner-Tool Minty finden Sie in Sekundenschnelle die richtigen Künstler für Ihre visuellen Produktionen. Das All-in-One-Tool bietet Kontakt zu 3.500 verifizierten Illustratorinnen und Illustratoren und unterstützt bei Lizenzierung und Projektmanagement.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#0030AA" />,
    tags: ["daten"],
  },
  {
    title: "23º Atlas",
    excerpt: "Datenvisualisierung leicht gemacht",
    description:
      "Mit unserem Partner 23° Atlas können Sie Ihre eigenen Statistiken publizieren oder Millionen von thematischen Statistiken einfach weiterverwenden – ob regionale Corona-Daten, Wirtschaftsstatistiken oder Studienergebnisse. Die automatisierten Statistiken funktionieren auf Websites, in Präsentationen oder Pressemitteilungen.",
    images: ["./images/img0.jpg", "./images/img1.jpeg", "./images/img2.jpeg"],
    icon: <Icon Component={GenericIcon} color="#212121" />,
    tags: ["visuals", "daten"],
  },
];
