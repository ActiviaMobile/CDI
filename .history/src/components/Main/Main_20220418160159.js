import WorkInProg from "../SvgComponents/WorkInProg"
import styles from "./Main.module.css"

export default function Main(){

    return(
        <div className={styles.main}>
        Sitio en construcción!
            <WorkInProg/>
        </div>
    )
}