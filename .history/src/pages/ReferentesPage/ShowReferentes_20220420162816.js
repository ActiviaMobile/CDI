import { useContext, useEffect, useState } from "react"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"

const ShowReferentes = () => {
    const [referentes , setReferentes] = useState([{Nombre : '' , Apellido : ''}])
    const {user} = useContext(SessionContext)
    useEffect(() => wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid']},'ReferenteGetAll'),[referentes])

    const handleRef = () => {}
    const handleRsp = (res) => {
        setReferentes(JSON.parse(res))
    }
    const handleError = () => {
        console.log('error referente get all')
    }

    return (
        <>
            {referentes.map(item => <div>${item.Nombre}</div>)}
        </>
    )
}

export default ShowReferentes