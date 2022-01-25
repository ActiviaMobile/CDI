import AuthFieldsContainer from "../components/AuthFields/AuthFieldsContainer"
import Logo from "../components/SvgComponents/Logo"
import styles from "./LoginPage.module.css"
export default function LoginPage(){ 

    return(
        <div className={styles.page}>
            <Logo/>
            <AuthFieldsContainer/>
        </div>
    )
}