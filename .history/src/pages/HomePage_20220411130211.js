import { useEffect,useState,useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getTokenRequest, wsRequest } from "../WsRequest/WsRequest";
import { SessionContext } from '../context/sessionContext';
import styles from "./HomePage.module.css";
import SideMenu from "../components/SideMenu/SideMenu";

export default function HomePage(){ 
    const [searchParams] = useSearchParams();
    const [token , setToken] = useState('')
    const {updateToken} = useContext(SessionContext);

    const passport = searchParams.get('passport')

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if(token){
            setToken(token)
            updateToken(token)
        }else{
            passport ?
                getTokenRequest(setToken,updateToken,passport) : 
                window.location.href = "http://consolatest.activiaweb.com.ar";
        }
    },[passport])

    if(!token){
        return <div></div>
    }
    return(
        <div className={styles.page}>
            <SideMenu/>
            <Header token={token}/>
        </div>
    )
}