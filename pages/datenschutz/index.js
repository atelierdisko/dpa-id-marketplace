import Legal from "../../components/legal/legal";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import styles from "../../styles/legal.module.css";
import {Meta} from "../../components/meta/meta";

export default function Index() {
    return (
        <>
            <Meta title={'Datenschutz'}/>

            <Navigation
                displayNavigation={false}
                iconColor={"white"}
                className={styles.navigation}
            />

            <Legal type="data"/>
            <Footer/>
        </>
    );
}
