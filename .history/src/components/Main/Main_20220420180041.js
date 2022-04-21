import { useEffect } from "react";
import styles from "./Main.module.css"
import displayOptions from "../../utils/MenuOptions";

export default function Main({display}){
    const item = displayOptions().find(item => item.id === display );
    useEffect(() => console.log('display main : ' ,display))
    return(
        <div className={styles.main}>
            {item.component}
        </div>
    )
}