import { useContext } from 'react'
import { SessionContext } from '../../context/sessionContext'
import LogoCDI from '../SvgComponents/LogoCDI'
import styles from './Header.module.css'

export default function Header(){

    const {user} = useContext(SessionContext)

    return(
        <div className={styles.container}>
            <h1>{user.Nombre}</h1>
            <LogoCDI className={styles.logo}/>
        </div>
    )
}