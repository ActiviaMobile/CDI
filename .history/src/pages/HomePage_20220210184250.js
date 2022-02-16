import { useEffect,useState,useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Logo from "../components/SvgComponents/Logo"
import { SessionContext } from "../context/sessionContext";
import { getTokenRequest } from "../WsRequest/TokenGet";
import styles from "./LoginPage.module.css"

export default function HomePage(){ 
    const {updateToken} = useContext(SessionContext)
    const [searchParams] = useSearchParams();
    const [token , setToken] = useState('')

    const passport = searchParams.get('passport')
    useEffect( () => getTokenRequest(setToken,passport), [passport])

    return(
        <div className={styles.page}>
            <Logo/>
            <div>{
                token ?  token : '...'
            }</div>
        </div>
    )
}