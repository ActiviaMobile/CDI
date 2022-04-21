import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"

const ShowReferentes = () => {
    const [referentes , setReferentes] = useState()
    const {user} = useContext(SessionContext)
    //wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid']},'ReferenteGetAll')
    useEffect(() => !referentes && wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid']},'ReferenteGetAll'))

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
            {referentes ? referentes.map(item => <div>${item.Nombre} ${item.Apellido}</div>) : <div></div>}
            <Link to={'/updateref'}>Añadir referente</Link>
        </>
    )
}

export default ShowReferentes