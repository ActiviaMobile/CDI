import styles from "./Main.module.css"
import WorkInProgress from "../WorkInProgress/WorkInProgress";
import menuOptions from "../../utils/MenuOptions";

export default function Main({display}){
    const item = menuOptions().find(item => item.id === display );

    return(
        <div className={styles.main}>
            {display ? item.component : <WorkInProgress/>}
        </div>
    )
}