import LogoCDI from '../SvgComponents/LogoCDI'
import styles from './Header.module.css'

export default function Header({user}){
    return(
        <div className={styles.container}>
            <h1>{user}</h1>
            <LogoCDI className={styles.logo}/>
        </div>
    )
}