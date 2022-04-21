import { useEffect,useContext , useState , useRef} from "react";
import { useSearchParams , Navigate} from "react-router-dom";
import { getTokenRequest, wsRequest } from "../../WsRequest/WsRequest";
import { SessionContext } from '../../context/sessionContext';
import styles from "./HomePage.module.css";
import redirectToConsole from "../../functions/Redirect";
import { Dashboard } from "../../components/index";

const HomePage = () => {

    const [searchParams] = useSearchParams();
    const {updateUser, user} = useContext(SessionContext);
    const [hasError, setHasError] = useState(false);
    const passport = searchParams.get('passport')

    const handleRsp = (res , token) => {
        const json = JSON.parse(res);
        console.log(json)
        updateUser(json)
    }

    const handleRef = (prop) => {}

    const handleError = () => {
        console.log('hay error')
        setHasError(true)
    }

    useEffect(() => {
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
        {user ? <Dashboard display={0}/> : 
            !hasError ? <div className={styles.center}>Accediendo al centro de integraciones...</div> : <Navigate to={"/error"}/>
        }
    </>
)
}
export default HomePage;
