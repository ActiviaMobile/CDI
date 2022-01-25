import AuthFieldsContainer from "../components/AuthFields/AuthFieldsContainer"
import styles from "./LoginPage.module.css"
export default function LoginPage(){ 

    return(
        <div className={styles.page}>
            <AuthFieldsContainer/>
        </div>
    )
}