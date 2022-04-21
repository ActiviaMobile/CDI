import { useState } from "react"
import { Button } from "../components/index"
import styles from "./ReferentesPage.module.css"

export default function ReferentesPage(){
    const [referente , setReferente] = useState({name: "" , email: "" , phone: ""})

    return(
        <div className={styles.page}>
            <input placeholder="Name"  onChange={(e) => {
                setReferente({ ...referente, name: e.target.value})
            }}/>
            <input placeholder="Email"  onChange={(e) => {
                setReferente({ ...referente, email: e.target.value})
            }}/>
            <input placeholder="Phone number" onChange={(e) => {
                setReferente({ ...referente, phone: e.target.value})
            }}/>
            <Button title={'Añadir'} />
        </div>
    )
}