import { useEffect,useState,useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import SchemesListContainer from "../components/Schemes/SchemesListContainer";
import { getTokenRequest } from "../WsRequest/WsRequest";
import { SessionContext } from '../context/sessionContext';
import styles from "./HomePage.module.css";

export default function HomePage(){ 
    const [searchParams] = useSearchParams();
    const [token , setToken] = useState('')
    const {updateToken} = useContext(SessionContext);

    const passport = searchParams.get('passport')
    useEffect( () => getTokenRequest(setToken,updateToken,passport), [passport] )

    return(
        <div className={styles.page}>
            <Header/>
            {token ?  <div className={styles.body}><SchemesListContainer/></div> : ''}
        </div>
    )
}