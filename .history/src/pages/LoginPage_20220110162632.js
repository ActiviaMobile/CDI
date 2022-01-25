import AuthFieldsContainer from "../components/AuthFields/AuthFieldsContainer"
import styles from "./LoginPage.css"
export default function LoginPage(){ 

    return(
        <div className={styles.page}>
            <AuthFieldsContainer/>
        </div>
    )
}