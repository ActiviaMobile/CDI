import { useState } from "react"
import { Button , Input } from "../components/index"
import styles from "./ReferentesPage.module.css"

export default function ReferentesPage(){
    const [name , setReferenteName] = useState({name: "" , email: "" , phone: ""})
    const [mail , setReferenteMail] = useState({name: "" , email: "" , phone: ""})
    const [phone , setReferentePhone] = useState({name: "" , email: "" , phone: ""})

    return(
        <div className={styles.page}>
            <Input placeholder={'Nombre'} callback={setReferenteName}/>
            <Input placeholder={'Mail'} callback={setReferenteMail}/>
            <Input placeholder={'Phone'} callback={setReferentePhone}/>
            <Button title={'Añadir'} />
        </div>
    )
}