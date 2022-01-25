import { useState } from "react"
import styles from './AuthFieldsContainer.module.css'
export default function AuthFieldsContainer(){
    
const [userName,setUserName] = useState('')    
const [userPass,setUserPass] = useState('')
const [accessToken, setAccessToken] = useState('')  

const showCredentials = () => {
    fetch('https://www.activiaweb.com.ar/Auth/token', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=password&username=${userName}&password=${userPass}&client_id=ec`
    }).then(response => {
        response.json().then(e => setAccessToken(e.access_token))
    }).catch(err => {
        err.json().then(e => console.log(e.error_description))
    })
}

    return(
        <div className={styles.container}>
            <input className={styles.input} onChange={e => setUserName(e.target.value)} value={userName}></input>
            <input type="password" className={styles.input} onChange={e => setUserPass(e.target.value)} value={userPass}></input>
            <button onClick={showCredentials}>Iniciar Sesion</button>
            <div>Token : {accessToken}</div>
        </div>
    )
}