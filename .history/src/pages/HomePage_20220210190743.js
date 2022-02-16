import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import ItemMethodsContainer from "../components/ItemMethods/ItemMetdosContainer";
import Logo from "../components/SvgComponents/Logo"
import { getTokenRequest } from "../WsRequest/TokenGet";
import styles from "./LoginPage.module.css"

export default function HomePage(){ 
    const [searchParams] = useSearchParams();
    const [token , setToken] = useState('')

    const passport = searchParams.get('passport')
    useEffect( () => getTokenRequest(setToken,passport), [passport])

    return(
        <div className={styles.page}>
            <Logo/>
            <div>{
                token ?  <ItemMethodsContainer/> : 'NAIN'
            }</div>
        </div>
    )
}