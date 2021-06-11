import cn from "classnames";
import styles from "./navigation.module.css";
import typography from "../../styles/typography.module.css";
import {Pagination} from "./pagination";

Navigation.defaultProps = {
    color: 'black'
}

function Navigation({className, slidePrev, slideTo, slideNext, index, length, color}) {
    return (
        <div className={cn(styles.navigation, styles[`is${color.capitalize()}`], className)}>
            <button
                onClick={() => slidePrev()}
                className={cn(typography.zeta500, styles.prevButton)}
            >
                ‹ Zurück
            </button>

            <Pagination count={length} activeIndex={index} slideTo={slideTo} color={color}/>

            <button
                onClick={() => slideNext()}
                className={cn(typography.zeta500, styles.nextButton)}
            >
                Weiter ›
            </button>
        </div>
    )
}

export {Navigation}