import { useEffect,useState,useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getTokenRequest, wsRequest } from "../WsRequest/WsRequest";
import { SessionContext } from '../context/sessionContext';
import styles from "./HomePage.module.css";
import SideMenu from "../components/SideMenu/SideMenu";
import Main from "../components/Main/Main"

export default function HomePage(){ 
    const [searchParams] = useSearchParams();
    const [userName , setUserName] = useState('')
    const {updateUser, user} = useContext(SessionContext);

    const passport = searchParams.get('passport')
    
    const handleRsp = (res) => {
        const json = JSON.parse(res);
        json.map( obj => obj['TokenGuid'] && updateUser(obj))
    }


    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if(token){

        }else{
            passport ?
                getTokenRequest(handleRsp,passport) : 
                window.location.href = "http://consolatest.activiaweb.com.ar";
        }
    },[passport])

    if(user){
        <div></div>
    }
    return(
        <div className={styles.pageRow}>
            <SideMenu/>
            <div className={styles.pageColumn}>
                <Header user={user['Nombre']}/>
                <Main />
            </div>
        </div>
    )
}