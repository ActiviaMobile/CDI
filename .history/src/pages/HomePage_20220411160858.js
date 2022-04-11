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
    const [user , setUser] = useState('')
    const {updateToken} = useContext(SessionContext);

    const passport = searchParams.get('passport')

    useEffect( () => {
        const token = sessionStorage.getItem('token');
        if(token){

        }else{
            if(passport){
                getTokenRequest(setUser,updateToken,passport).then(async (rsp) => {
                    console.log('home page' , rsp);
                })
            }else{
                window.location.href = "http://consolatest.activiaweb.com.ar";
            }
        }
    },[passport])

    if(!user){
        <div></div>
    }
    return(
        <div className={styles.pageRow}>
            <SideMenu/>
            <div className={styles.pageColumn}>
                <Header user='Desarrollador 99'/>
                <Main />
            </div>
        </div>
    )
}