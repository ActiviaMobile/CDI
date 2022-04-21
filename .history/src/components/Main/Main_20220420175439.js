import styles from "./Main.module.css"
import {displayOptions} from "../../utils/MenuOptions";
import { useEffect } from "react";

export default function Main({display}){
    const item = displayOptions().find(item => item.id === display );
    useEffect(() => console.log('display main : ' ,display))
    return(
        <div className={styles.main}>
            {item.component}
        </div>
    )
}