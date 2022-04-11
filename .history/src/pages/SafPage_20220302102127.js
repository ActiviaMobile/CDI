import LogoActivia from "../components/SvgComponents/LogoActivia"
import styles from "./SafPage.module.css"

export default function SafPage(){
    return (
        <div className={styles.title}>
            <div>
                <h1>S.A.F</h1>
                <h2>Esquema <br/>del <br/>Sistema de Alta Frecuencia</h2>
                <h3>Revisado: Abril 2019 <br/> Versión 3.7</h3>
            </div>
            <LogoActivia/>
        </div>
    )
}
