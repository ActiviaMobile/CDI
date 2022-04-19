import Button from "../components/Button/Button";
import styles from "./ErrorPage.module.css"
import redirectToConsole from "../functions/Redirect";

const ErrorPage = () => {
    return ( <
        div className = { styles.center } >
        Ocurrio un error durante la autenticación, intente nuevamente <
        Button title = { 'Autenticarme' }
        callback = { redirectToConsole }
        /> <
        /div>
    )

}

export default ErrorPage;