import { useEffect, useState } from "react"
import { Button , Input } from "../components/index"
import styles from "./ReferentesPage.module.css"

export default function ReferentesPage(){
    const [name , setReferenteName] = useState('')
    const [email , setReferenteEmail] = useState('')
    const [phone , setReferentePhone] = useState('')
    const [emailStatus , setEmailStatus] = useState(false)
    const [phoneStatus ,setPhoneStatus] = useState(false)
    const [isActive , setIsActive] = useState(false)

    const validateForm = () => name.length() > 0 && emailStatus && phone.length() === 10 ? setIsActive(true) : setIsActive(false)
    const handleButton = () => {

    }
    const validateMail = () => {
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setEmailStatus(regex.test(email))
    }

    useEffect(() => {
        console.log(email)
        validateMail()
    })

    return(
        <div className={styles.page}>
            <Input placeholder={'Nombre'} callback={setReferenteName}/>
            <Input placeholder={'Email'} callback={setReferenteEmail}/>
            <Input placeholder={'Phone'} callback={setReferentePhone}/>
            <Button title={'Añadir'} callback={handleButton} isActive={false} />
        </div>
    )
}