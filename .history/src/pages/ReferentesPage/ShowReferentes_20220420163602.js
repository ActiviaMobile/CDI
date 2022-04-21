import { useContext, useEffect, useState } from "react"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"

const ShowReferentes = () => {
    const [referentes , setReferentes] = useState([])
    const {user} = useContext(SessionContext)
    //wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid']},'ReferenteGetAll')
    useEffect(() => wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid']},'ReferenteGetAll'),[referentes])

    const handleRef = (title) => {
        console.log(title)
    }

    const handleRsp = (res) => {
        console.log('handlersp')
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