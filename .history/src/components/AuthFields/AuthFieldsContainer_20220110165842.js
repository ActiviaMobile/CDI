import { useState } from "react"
import styles from './AuthFieldsContainer.module.css'
export default function AuthFieldsContainer() {

    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')

    return ( <
        div className = { styles.container } >
        <
        input className = { styles.input }
        onChange = {
            e => {
                setUserName(e.target.value)
                console.log(userName)
            }
        }
        value = { userName } > < /input> <
        input className = { styles.input }
        onChange = { e => setUserPass(e.target.value) }
        value = { userPass } > < /input> <
        button > Iniciar Sesion < /button> <
        /div>
    )
}