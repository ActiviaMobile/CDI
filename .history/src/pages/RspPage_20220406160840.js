import { useEffect , useContext, useState} from "react";
import { useParams } from "react-router-dom"
import LogoActivia from "../components/SvgComponents/LogoActivia"
import { SessionContext } from "../context/sessionContext";
import { wsRequest } from "../WsRequest/WsRequest";
import styles from "./AmbitoPage.module.css"

export default function SafPage(){
    const [rsp , setRsp] = useState();
    const {title,method,id} = useParams();
    const {token} = useContext(SessionContext)

    useEffect(() => wsRequest(setRsp,token, method,id), [method,rsp,token,id])

    return (
        <div>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            {rsp ? <div>{rsp}</div> : <div>Davox</div>}
            <div className={styles.logo}><LogoActivia/></div>
        </div>
    )
}
