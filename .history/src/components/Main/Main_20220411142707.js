import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/mainContext"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"

export default function Main(){
    const {rsp} = useContext(MainContext)

    return(
        <div>HOLA</div>
    )
}