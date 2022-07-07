import { useContext } from 'react'
import { SessionContext } from '../../context/sessionContext'
import LogoActivia from '../SvgComponents/LogoActivia'
import HorizontalShadow from "../SvgComponents/HorizontalShadow"
import styles from './Header.module.css'

export default function Header(){

    const {user} = useContext(SessionContext)

    return(
        <div className={styles.container}>      
                <label id={styles.label}>CENTRO DE INTEGRACIONES</label>
                <LogoActivia id={styles.logo}/>
        </div>
    )
}