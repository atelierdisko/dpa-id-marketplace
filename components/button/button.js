import styles from './button.module.css'
import {joinClassNames} from "../../utilities/componentsHelpers";

export default function Button({children,isDoublePadding,className}) {
    return <a className={joinClassNames(className,styles.root,isDoublePadding && styles.isDoublePadding)}>{children}</a>


}