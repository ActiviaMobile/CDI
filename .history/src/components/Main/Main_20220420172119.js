import styles from "./Main.module.css"
import WorkInProgress from "../WorkInProgress/WorkInProgress";
import menuOptions from "../../utils/MenuOptions";
import { useEffect } from "react";

export default function Main({display}){
    const item = menuOptions().find(item => item.route === display );
    useEffect(() => console.log('display main : ' ,display))
    return(
        <div className={styles.main}>
            {item.component}
        </div>
    )
}