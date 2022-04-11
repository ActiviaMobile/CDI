import LogoCDI from '../SvgComponents/LogoCDI'
import styles from './Header.module.css'

export default function Header({token}){
    return(
        <div className={styles.container}>
            <h1>{token}</h1>
            <LogoCDI className={styles.logo}/>
        </div>
    )
}