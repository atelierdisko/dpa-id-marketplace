import Legal from "../../components/legal/legal";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import styles from "./index.module.css";

export default function Index() {
  return (
    <>
      <Navigation displayNavigation={false} className={styles.navigation} />
      <Legal type="data" className={styles.legal} />
      <Footer className={styles.footer} />
    </>
  );
}
