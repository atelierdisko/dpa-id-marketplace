import styles from './applications.module.css'
import typography from '../../styles/typography.module.css'
import grid from '../../styles/grid.module.css'
import {joinClassNames} from "../../utilities/componentsHelpers";
import Slider from "../slider/slider";

export default function Applications({className}) {
    return (
        <>
        <section className={joinClassNames(styles.root,className)}>
            <div className={joinClassNames(styles.container,grid.root)}>
                <img src='../images/img2.jpeg' className={styles.image}/>
                <div className={styles.description}>
                    <p className={joinClassNames(typography.zeta500,styles.phrase)}>Name der Person — Position der Person</p>
                    <p className={joinClassNames(typography.gamma500,styles.quote)}>„Hier steht ein kurzer Text mit einem Zitat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr”</p>
                    <Slider array={[1,2,3,4,5]}  activePage={1} className={styles.slider}/>
                </div>
            </div>
        </section>
        <div className={styles.textLoop}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </>
    )

}