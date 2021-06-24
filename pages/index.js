import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Quotes from "../components/quotes/quotes";
import SignIn from "../components/signIn/signIn";
import Applications from "../components/applications/applications";
import Functionalities from "../components/functionalities/functionalities";
import Marquee from "../components/marquee/marquee";
import { Meta } from "../components/meta/meta";
import axios from "axios";

export default function Home({ messages }) {
  return (
    <div>
      <Meta title={"Home"} />

      <Navigation
        className={styles.navigation}
        displayNavigation={true}
        isLight={true}
        iconColor={"black"}
      />

      <main>
        <Hero />

        <Marquee>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ein Laufband
          mit kurzen, prägnaten Benefits. Suspendisse quis mattis orci.
          Curabitur libero erat, imperdiet eu posuere ac, blandit ut sem.
        </Marquee>

        <Applications />

        <Quotes />

        <Functionalities messages={messages} />

        <SignIn id="signIn" />
      </main>

      <Footer className={styles.footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://partnerprogramm.dpa-id.de/select-api"
  );

  return {
    props: {
      messages: data,
    },
    revalidate: 10,
  };
};
