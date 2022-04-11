import LogoActivia from "../components/SvgComponents/LogoActivia"
import styles from "./AmbitoPage.module.css"

export default function SafPage(){
    return (
        <div>
            <div className={styles.title}>
                <h1>Ambito</h1>
            </div>
            <div className={styles.logo}><LogoActivia/></div>
        </div>
    )
}
