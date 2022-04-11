import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/mainContext"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"
import styles from "./Main.module.css"

export default function Main(){
    const {rsp} = useContext(MainContext)

    return(
        <div className={styles.main}>HOLA</div>
    )
}