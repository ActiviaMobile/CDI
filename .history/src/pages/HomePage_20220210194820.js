import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import ItemMethodsContainer from "../components/ItemMethods/ItemMethodsContainer";
import Logo from "../components/SvgComponents/Logo"
import { getTokenRequest } from "../WsRequest/TokenGet";
import styles from "./HomePage.module.css"

export default function HomePage(){ 
    const [searchParams] = useSearchParams();
    const [token , setToken] = useState('')

    const passport = searchParams.get('passport')
    useEffect( () => getTokenRequest(setToken,passport), [passport])

    return(
        <div className={styles.page}>
            <Header/>
            {token ?  <ItemMethodsContainer/> : 'NAIN'}
        </div>
    )
}