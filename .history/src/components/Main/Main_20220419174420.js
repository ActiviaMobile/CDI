import styles from "./Main.module.css"
import sideMenuItems from "../../utils/SideMenuItems"
import WorkInProgress from "../WorkInProgress/WorkInProgress";

export default function Main({display}){
    //const item = sideMenuItems.find(item => item.id === display );

    return(
        <div className={styles.main}>
            {/* {display ? item.component : <WorkInProgress/>} */}
        </div>
    )
}