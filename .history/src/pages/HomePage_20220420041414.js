import { useEffect,useContext , useState , useRef} from "react";
import { useSearchParams , Navigate} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { getTokenRequest, wsRequest } from "../WsRequest/WsRequest";
import { SessionContext } from '../context/sessionContext';
import styles from "./HomePage.module.css";
import redirectToConsole from "../functions/Redirect";
import {DashboardPage} from "./index";

const HomePage = () => {

    const [searchParams] = useSearchParams();
    const {updateUser, user} = useContext(SessionContext);
    const [hasError, setHasError] = useState(false);
    const ref = useRef(null)
    const passport = searchParams.get('passport')

    const handleRsp = (res , token) => {
        console.log('hay exito')
        const json = JSON.parse(res);
        console.log(json)
        updateUser(json)
    }

    const handleError = () => {
        console.log('hay error')
        setHasError(true)
    }

    const handleRef = (isLoading) => isLoading ? ref.current.continuousStart() : ref.current.complete();

    useEffect(() => {
        handleRef(true)
        const userData = localStorage.getItem('user');
        if(userData){   
            console.log('hay user')
            const json = JSON.parse(userData);
            wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : json['TokenGuid']},'UsuarioGetByToken')
        }else{
            passport ?
                getTokenRequest(handleRsp,handleError,passport) :
                redirectToConsole();
        }
    },[passport])

return(
    <>
        {user ? <DashboardPage user={user}/> : 
            !hasError ? <div className={styles.center}>Accediendo al centro de integraciones...<LoadingBar color="blue" ref={ref}/></div> : <Navigate to={"/error"}/>
        }
    </>
)
}
export default HomePage;
