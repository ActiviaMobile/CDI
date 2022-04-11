import { useEffect , useContext, useState} from "react";
import { useParams } from "react-router-dom"
import LogoActivia from "../components/SvgComponents/LogoActivia"
import { SessionContext } from "../context/sessionContext";
import { wsRequest } from "../WsRequest/WsRequest";
import styles from "./AmbitoPage.module.css"

export default function RspPage(){
    // const [rsp , setRsp] = useState();
    // const {title,method,id} = useParams();
    // const {token} = useContext(SessionContext)

    // useEffect(() => wsRequest(setRsp,token, method,id), [method,rsp,token,id])

    return (
        <div>
            HOLA
        </div>
    )
}
