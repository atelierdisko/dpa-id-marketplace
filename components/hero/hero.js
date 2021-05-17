import Button from "../button/button";
import {joinClassNames} from "../../utilities/componentsHelpers";
import styles from './hero.module.css'
import typography from '../../styles/typography.module.css'
import grid from '../../styles/grid.module.css'

export default function Hero({className}) {
    return(
        <section className={joinClassNames(className,styles.root,grid.root)}>
            <h1 className={joinClassNames(styles.title,typography.beta500)}>VAR B-1 · Ihr Schlüssel zur Nachrichtenwelt der dpa</h1>
            <p className={joinClassNames(styles.description,typography.delta400)}>Hier steht ein kurzer Text zur Einführung und Erklärung der ID. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <div className={styles.buttonContainer}>
                <Button isActive={true} isDoublePadding={true} >Jetzt dpa ID anlegen und Tools testen</Button>
            </div>
        </section>
    )

}