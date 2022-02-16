import Logo from '../SvgComponents/Logo'
import styles from './Header.css'

export default function Header(){
    return(
        <div className={styles.headercontainer}>
            <Logo/>
        </div>
    )
}