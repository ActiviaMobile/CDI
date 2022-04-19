import { useEffect,useContext , useState , useRef} from "react";
import { useSearchParams } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
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
    const ref = useRef(null)
    const passport = searchParams.get('passport')

    const handleRsp = (res , token) => {
        const json = JSON.parse(res);
        console.log(json)
        updateUser(json)
    }

    const handleRef = (isLoading) => {
        isLoading ? ref.current.continuousStart() : ref.current.complete();
    }

    const handleError = () => {
        console.log('hay error')
        setHasError(true)
    }

    const redirectToConsole = () => {
        window.location.href = "http://consolatest.activiaweb.com.ar";
    }

    useEffect(() => {
        ref.current.continuousStart();
        const userData = localStorage.getItem('user');
        if(userData){   
            console.log('hay user')
            const json = JSON.parse(userData);
            wsRequest(handleRef,handleRsp,handleError,json['TokenGuid'],'UsuarioGetByToken')
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
            return(
                <LoadingBar color="blue" ref={ref}/>
            )
        }else{
            return (
            <button onClick={redirectToConsole}>Autenticarme</button>)
        }
    } 
    }
