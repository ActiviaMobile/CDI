import styles from "./Main.module.css"
import menuOptions from "../../utils/MenuOptions";
import { useEffect } from "react";

export default function Main({display}){
    const component = menuOptions().find(({route,id,component}) => route === display );
    useEffect(() => console.log('display main : ' ,display))
    return(
        <div className={styles.main}>
            {component}
        </div>
    )
}