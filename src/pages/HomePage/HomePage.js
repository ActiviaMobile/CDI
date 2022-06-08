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

    const handleError = () => setHasError(true)

    const handleRsp = (res , token) => {
        const json = JSON.parse(res);
        updateUser(json)
    }

    const handleRef = () => {}

    useEffect(() => {
        localStorage.clear()
        const userData = localStorage.getItem('user');
        if(userData){   
            console.log('hay user')
            const json = JSON.parse(userData);
            console.log('user : ' , userData)
            wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : json['TokenGuid']},'UsuarioGetByToken')
        }else{
            console.log('pido token')
            passport ?
                getTokenRequest(handleRef,handleRsp,handleError,passport) :
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
