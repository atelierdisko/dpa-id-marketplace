import cn from "classnames";
import styles from "./bullet.module.css";

Bullet.defaultProps = {
    active: false
}

function Bullet({active, onClick, color}) {
    return <span className={cn(styles.root, active ? styles.isActive : null, styles[`is${color.capitalize()}`])} onClick={onClick}/>
}

export {Bullet}