import { useEffect,useContext , useState } from "react";
import { useSearchParams , Navigate } from "react-router-dom";
import { getTokenRequest, wsRequest } from "../../WsRequest/WsRequest";
import { SessionContext } from '../../context/sessionContext';
import styles from "./HomePage.module.css";
import redirectToConsole from "../../functions/Redirect";

const HomePage = () => {

    const [searchParams] = useSearchParams();
    const {updateUser, setSoftwareData,user} = useContext(SessionContext);
    const [hasError, setHasError] = useState(false);
    const [hasSoftware , setHasSoftware] = useState(false)
    const [isLoading , setIsLoading] = useState(true)
    const passport = searchParams.get('passport')

    const handleError = () => setHasError(true)

    const handleRsp = (res) => {
        console.log(res)
        updateUser(JSON.parse(res))}
    
    const handleSoft = (res) => {
        const json = JSON.parse(res)
        console.log(json)
        setHasSoftware(json.length > 0)
        setSoftwareData(json)
        setIsLoading(false)
    }

    useEffect(() => {
        localStorage.clear()
        const userData = JSON.parse(localStorage.getItem('user'));
        userData ?
            wsRequest(handleRsp,handleError,{'tokenUsuario' : userData['TokenGuid']},'UsuarioGetByToken') :
            passport ?
                getTokenRequest(handleRsp,handleError,passport) :
                redirectToConsole();
    },[passport])

    useEffect(() => {
        user && wsRequest(handleSoft,handleError,{'tokenUsuario' : user['TokenGuid']},'SoftwareGetAll')
    } , [user])

    return(
        <>
        {isLoading ? <div className={styles.center}>Accediendo al centro de integraciones...</div> : 
            hasError ? <Navigate to={"/error"}/> : 
                hasSoftware ? <Navigate to={"/perfil"}/> : <Navigate to={"/SignUp"}/>}
        </>
        // <>
        //     {user ? hasSoftware ? <Navigate to="/main"/> : <Navigate to="/SignUp" /> : 
        //         !hasError ? <div className={styles.center}>Accediendo al centro de integraciones...</div> : <Navigate to={"/error"}/>
        //     }
        // </>
    )
}
export default HomePage;
