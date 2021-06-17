import Legal from "../../components/legal/legal";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import styles from "../../styles/legal.module.css";
import cn from "classnames";

export default function Index() {
  return (
    <div>
      <Navigation
        displayNavigation={false}
        iconColor={"white"}
        className={cn(styles.navigation)}
      />
      <Legal type="imprint" />
      <Footer />
    </div>
  );
}
