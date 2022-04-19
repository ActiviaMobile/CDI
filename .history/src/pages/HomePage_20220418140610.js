import { useEffect,useContext , useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getTokenRequest, wsRequest } from "../WsRequest/WsRequest";
import { SessionContext } from '../context/sessionContext';
import styles from "./HomePage.module.css";
import SideMenu from "../components/SideMenu/SideMenu";
import Main from "../components/Main/Main"

export default function HomePage(){
    const [searchParams] = useSearchParams();
    const {updateUser, user} = useContext(SessionContext);
    const passport = searchParams.get('passport')

    const handleRsp = (res , token) => {
        const json = JSON.parse(res);
        console.log(json)
        updateUser(json)
    }

    const handleError = () => {
        console.log('hay error')
        window.location.href = "http://consolatest.activiaweb.com.ar";
    }

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if(userData){   
            console.log('hay user')
            const json = JSON.parse(userData);
            wsRequest(handleRsp,handleError,json['TokenGuid'],'UsuarioGetByToken')
        }else{
            passport ?
                getTokenRequest(handleRsp,handleError,passport) :
                window.location.href = "http://consolatest.activiaweb.com.ar";
        }
    },[passport])

    return(
        <div className={styles.pageRow}>
            <SideMenu/>
            <div className={styles.pageColumn}>
                <Header user={user['Nombre']}/>
                <Main/>
            </div>
        </div>
    )
}