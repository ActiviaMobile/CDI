import { useContext, useState } from "react"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"
import Button from "../Button/Button"

const ReferenteItem = ({item , setReferente}) => {

    const [isLoading , setIsLoading] = useState(false)
    const {user} = useContext(SessionContext)

    const handleRsp = (res) => {
        console.log(res)
    }

    const handleError = () => {
        console.log('error')
    }

    const removeItem = () => {
        wsRequest(setIsLoading,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid'] , 'id' : user['IdentityId']},'ReferenteDelete')
    } 

    return(
        <div>
            <div>${item.Nombre} ${item.Apellido}</div>
            <Button title={'X'} callback={removeItem} />
        </div>
    )
}

export default ReferenteItem