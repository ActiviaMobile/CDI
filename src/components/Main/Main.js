import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/mainContext"
import styles from "./Main.module.css"

export default function Main(){
    const [responseText , setRsp] = useState()
    const {rsp} = useContext(MainContext)

    useEffect(() =>{
        setRsp(rsp)
    },[rsp])

    return(
        <div className={styles.main}>{responseText}</div>
    )
}