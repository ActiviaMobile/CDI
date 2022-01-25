import { useState } from "react"
import styles from './AuthFieldsContainer.module.css'
export default function AuthFieldsContainer(){
    
const [userName,setUserName] = useState('')    
const [userPass,setUserPass] = useState('')  
const showCredentials = () => {
    console.log(userName , userPass)
}
    return(
        <div className={styles.container}>
            <input className={styles.input} onChange={e => setUserName(e.target.value)} value={userName}></input>
            <input className={styles.input} onChange={e => setUserPass(e.target.value)} value={userPass}></input>
            <button onClick={showCredentials}>Iniciar Sesion</button>
        </div>
    )
}