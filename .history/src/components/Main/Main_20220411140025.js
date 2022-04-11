import { useContext, useEffect, useState } from "react"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"

export default function Main({method}){
    const [rsp, setRsp] = useState()
    const [token] = useContext(SessionContext)
    useEffect(() => {
        wsRequest(setRsp,token,method)
    }, [rsp])

    return(
        <div>{rsp}</div>
    )
}