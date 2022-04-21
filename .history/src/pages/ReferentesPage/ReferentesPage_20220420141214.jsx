import { useEffect, useState , useRef , useContext} from "react"
import { SessionContext } from "../context/sessionContext"
import { Button , Input } from "../components/index"
import styles from "./ReferentesPage.module.css"
import {wsRequest} from "../WsRequest/WsRequest"
import LoadingBar from "react-top-loading-bar"

export default function ReferentesPage(){
    const [name , setReferenteName] = useState('')
    const [lastName , setReferenteLastName] = useState('')
    const [email , setReferenteEmail] = useState('')
    const [phone , setReferentePhone] = useState('')
    const [referente , setReferente]  = useState({})
    const [isDisable , setIsDiable] = useState(true)
    const ref = useRef(null)
    const { user } = useContext(SessionContext)

    const handleRsp = (res) => {
        const json = JSON.parse(res)
        console.log(json)
    }

    const handleError = () => console.log('error referentes')

    const validateForm = () => {
        if(name.length && lastName.length > 0 && validateMail() && phone.length === 10) {
            setIsDiable(false)
            setReferente({'Nombre': name , 'Apellido' : lastName,'Email': email , 'Telefono': phone , 'DesarrolladorI' : user['IdentityId']})
        } else {
            setIsDiable(true)
        }}

    const validateMail = () => {
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(email)
    }

    const handleRef = (isLoading) => isLoading ? ref.current.continuousStart() : ref.current.complete()

    useEffect(() => {
        console.log(ref.current)
        validateForm()}, [name,email,phone,lastName]) 

    return(
        <div className={styles.page}>
            <Input placeholder={'Nombre'} callback={setReferenteName}/>
            <Input placeholder={'Apellido'} callback={setReferenteLastName}/>
            <Input placeholder={'Email'} callback={setReferenteEmail}/>
            <Input placeholder={'Phone'} callback={setReferentePhone}/>
            <Button title={'Añadir'} callback={() => wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid'] , 'json' : JSON.stringify(referente)},'ReferenteSave')} isDisable={isDisable} />
            {/* {ref.current && <LoadingBar ref={ref} color="blue"/> } */}
        </div>
    )
}