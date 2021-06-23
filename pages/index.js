import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Quotes from "../components/quotes/quotes";
import SignIn from "../components/signIn/signIn";
import Applications from "../components/applications/applications";
import Functionalities from "../components/functionalities/functionalities";
import applicationsData from "../applicationsData";
import quotesData from "../quotesData";
import functionalitiesData from "../functionalitiesData";
import messagesData from "../messagesData";
import Marquee from "../components/marquee/marquee";

export default function Home() {
  const filters = [
    "Aktuelles",
    "Recherche",
    "Planung",
    "Distribution",
    "Audio",
    "Video",
    "Visuals",
    "Daten",
    "Alle anzeigen",
  ];
  return (
    <div>
      <Head>
        <title>dpa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation
        className={styles.navigation}
        displayNavigation={true}
        isLight={true}
        iconColor={"black"}
      />
      <main>
        <Hero className={styles.hero} id="hero" />
        <Marquee>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ein Laufband
          mit kurzen, prägnaten Benefits. Suspendisse quis mattis orci.
          Curabitur libero erat, imperdiet eu posuere ac, blandit ut sem.
        </Marquee>
        <Applications
          className={styles.applications}
          filters={filters}
          applications={applicationsData}
          initialFilter={"Alle anzeigen"}
          id="applications"
        />

        <Quotes className={styles.quotes} data={quotesData} id="quotes" />
        <Functionalities
          functionalities={functionalitiesData}
          id="functionalities"
          messages={messagesData}
        />
        <SignIn className={styles.signIn} id="signIn" />
      </main>

      <Footer className={styles.footer} />
    </div>
  );
}
