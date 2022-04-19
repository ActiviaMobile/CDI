import { useEffect,useContext , useState , useRef} from "react";
import { useSearchParams } from "react-router-dom";
import LoadingProgress from 'react-js-loading-progress-bar';
import Header from "../components/Header/Header";
import { getTokenRequest, wsRequest } from "../WsRequest/WsRequest";
import { SessionContext } from '../context/sessionContext';
import styles from "./HomePage.module.css";
import SideMenu from "../components/SideMenu/SideMenu";
import Main from "../components/Main/Main"

export default function HomePage(){

    const [searchParams] = useSearchParams();
    const {updateUser, user} = useContext(SessionContext);
    const [hasError, setHasError] = useState(false);
    const [current, setCurrent] = useState(0)
    const passport = searchParams.get('passport')

    const handleRsp = (res , token) => {
        const json = JSON.parse(res);
        console.log(json)
        updateUser(json)
    }

    const handleError = () => {
        console.log('hay error')
        setHasError(true)
    }

    const redirectToConsole = () => {
        window.location.href = "http://consolatest.activiaweb.com.ar";
    }

    useEffect(() => {
        setCurrent(1)
        const userData = localStorage.getItem('user');
        if(userData){   
            console.log('hay user')
            const json = JSON.parse(userData);
            wsRequest(setCurrent,handleRsp,handleError,json['TokenGuid'],'UsuarioGetByToken')
        }else{
            passport ?
                getTokenRequest(handleRsp,handleError,passport) :
                window.location.href = "http://consolatest.activiaweb.com.ar";
        }
    },[passport])

    if(user){
        console.log('usuario : ', user)
            return (            
                <div className={styles.pageRow}>
                    <SideMenu/>
                    <div className={styles.pageColumn}>
                        <Header user={user['Nombre']}/>
                        <Main/>
                    </div>
                </div>
            )
    } else {
        if(!hasError){
            console.log('render loading bar')
            return(
                <div className={styles.loadingBarMenu}>
                    <LoadingProgress  color="blue" total={3} current={current} active={true} visualOnly={true}/>
                </div>
            )
        }else{
            return (
            <button onClick={redirectToConsole}>Autenticarme</button>)
        }
    } 
    }
