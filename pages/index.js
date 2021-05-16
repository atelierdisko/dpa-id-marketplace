import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Applications from "../components/applications/applications";
import Funktionalitaten from "../components/functionalities/functionalities";
import PartnerProgram from "../components/partnerProgram/partnerProgram";
import LogIn from "../components/logIn/logIn";
import {joinClassNames} from "../utilities/componentsHelpers";

export default function Home() {
  return (
    <div >
      <Head>
        <title>dpa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navigation className={joinClassNames(styles.navigation)}/>

      <main >
          <Hero/>
          <Applications/>
          <Funktionalitaten/>
          <PartnerProgram/>
          <LogIn/>
      </main>

      <Footer className={joinClassNames(styles.footer)}/>
    </div>
  )
}
