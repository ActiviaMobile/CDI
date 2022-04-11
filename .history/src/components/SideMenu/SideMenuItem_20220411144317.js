import styles from "./SideMenuItem.module.css"
import { wsRequest } from "../../WsRequest/WsRequest"
import { useContext } from "react"
import { SessionContext } from "../../context/sessionContext"
import { MainContext } from "../../context/mainContext"

export default function SideMenuItem({title,method}){
    const {token} = useContext(SessionContext)
    const {updateRsp} = useContext(MainContext)

    return(
        <button onClick={() => wsRequest(updateRsp,method,token)} className={styles.menuItem}>{title}</button>
    )
}