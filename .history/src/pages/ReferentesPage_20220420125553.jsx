import { useEffect, useState , useRef , useContext} from "react"
import { SessionContext } from "../context/sessionContext"
import { Button , Input } from "../components/index"
import styles from "./ReferentesPage.module.css"
import {wsRequest} from "../WsRequest/WsRequest"

export default function ReferentesPage(){
    const [name , setReferenteName] = useState('')
    const [email , setReferenteEmail] = useState('')
    const [phone , setReferentePhone] = useState('')
    const [referente , setReferente]  = useState({nombre : '' , email : '' , phone : ''})
    const [isDisable , setIsDiable] = useState(true)
    const ref = useRef(null)
    const { user } = useContext(SessionContext)

    const handleRsp = (res) => {
        const json = JSON.parse(res)
        console.log(json)
    }

    const handleError = () => console.log('error referentes')

    const handleRef = (isLoading) => isLoading ? ref.current.continuousStart() : ref.current.complete();

    const validateForm = () => {
        if(name.length > 0 && validateMail() && phone.length === 10) {
            setIsDiable(false)
            //setReferente({nombre: name , email: email , phone: phone})
        } else {
            setIsDiable(true)
        }}

    const validateMail = () => {
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(email)
    }

    useEffect(() => validateForm()) 

    return(
        <div className={styles.page}>
            <Input placeholder={'Nombre'} callback={setReferenteName}/>
            <Input placeholder={'Email'} callback={setReferenteEmail}/>
            <Input placeholder={'Phone'} callback={setReferentePhone}/>
            <Button title={'Añadir'} callback={() => wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid'] , 'json' : JSON.stringify(referente)},'ReferenteSave')} isDisable={isDisable} />
        </div>
    )
}