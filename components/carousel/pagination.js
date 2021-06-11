import styles from "./pagination.module.css";
import {Bullet} from "./bullet";

function Pagination({count, activeIndex, slideTo, color}) {
    let bullets = [];

    for (let i = 0; i < count; i++) {
        bullets.push((
            <Bullet active={i === activeIndex} onClick={() => slideTo(i+1)} color={color}/>
        ));
    }

    return (
        <div className={styles.root}>
            {bullets}
        </div>
    )
}

export {Pagination}