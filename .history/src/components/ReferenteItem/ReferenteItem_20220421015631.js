import { useContext, useState } from "react"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"
import styles from "./ReferenteItem.module.css"

const ReferenteItem = ({item , setReferente}) => {

    const [isLoading , setIsLoading] = useState(false)
    const {user} = useContext(SessionContext)

    const handleRsp = (res) => {
        setReferente(null)
    }

    const handleError = () => {
        console.log('error')
    }

    const removeItem = () => {
        wsRequest(setIsLoading,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid'] , 'id' : user['IdentityId']},'ReferenteDelete')
    } 

    return(
        <div className={styles.item}>
            {!isLoading ? <div>${item.Nombre} ${item.Apellido}</div> : <>Borrando</>}
            {!isLoading && <button onClick={removeItem}>X</button>}
        </div>
    )
}

export default ReferenteItem