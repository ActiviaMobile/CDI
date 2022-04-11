import { useEffect,useState,useContext } from "react";
import { useSearchParams , Redirect} from "react-router-dom";
import Header from "../components/Header/Header";
import MethodsListContainer from "../components/Methods/MethodsListContainer";
import { getTokenRequest } from "../WsRequest/WsRequest";
import { SessionContext } from '../context/sessionContext';
import styles from "./HomePage.module.css";

export default function HomePage(){ 
    const [searchParams] = useSearchParams();
    const [token , setToken] = useState('')
    const {updateToken} = useContext(SessionContext);

    const passport = searchParams.get('passport')
    useEffect(() => {
        passport ? 
            getTokenRequest(setToken,updateToken,passport) :
            console.log('No hay pasaporte')
            // <Redirect to="/rsp"/>
    },[passport,setToken,updateToken])

    return(
        <div className={styles.page}>
            <Header/>
            {token ?  <div className={styles.body}><MethodsListContainer/></div> : ''}
        </div>
    )
}