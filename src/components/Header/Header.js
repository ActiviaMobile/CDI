import Logo from '../SvgComponents/Logo'
import styles from './Header.module.css'

export default function Header(){
    return(
        <div className={styles.container}>
            <Logo className={styles.logo}/>
        </div>
    )
}