import styles from "./SideMenuItem.module.css"
import { wsRequest } from "../../WsRequest/WsRequest"
import { useContext } from "react"
import { SessionContext } from "../../context/sessionContext"
import { MainContext } from "../../context/mainContext"

export default function SideMenuItem({title,id,setDisplay}){
    const {token} = useContext(SessionContext)
    const {updateRsp} = useContext(MainContext)

    return(
        <div className={styles.menuItemContainer}>
            <button onClick={() => setDisplay(id)} className={styles.menuItem}>{title}</button>
        </div>
    )
}