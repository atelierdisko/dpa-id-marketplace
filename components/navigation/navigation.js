import Link from 'next/link'
import Logo from "../logo/logo";
import styles from './navigation.module.css'
import grid from '../../styles/grid.module.css'
import typography from '../../styles/typography.module.css'
import {joinClassNames} from "../../utilities/componentsHelpers";
import Button from "../button/button";

export default function Navigation({className}) {
    return(
        <nav className={styles.root}>
            <div className={joinClassNames(grid.root,className)}><Logo classname={styles.logo} />
                <ul className={styles.list}>
                    <li className={typography.zeta500}>
                        <Link href='#applications'>
                            <a >Anwendungen</a>
                        </Link>
                    </li>
                    <li className={typography.zeta500}>
                        <Link href='#funtionalities'>
                            <a>Funktionalitäten</a>
                        </Link>
                    </li>
                    <li className={typography.zeta500}>
                        <Link href='#partnerProgram'>
                            <a>Partnerprogramm</a>
                        </Link>
                    </li>
                    <li className={typography.etaInter500}>
                        <Link href='#logIn'>
                            <a className={styles.logIn}>Anmelden</a>
                        </Link>
                    </li>
                    <li className={typography.etaInter500}>
                        <Link href='#createId'>
                            <Button>Jetzt dpa ID anlegen</Button>
                        </Link>
                    </li>
                </ul></div>

        </nav>
    )

 }