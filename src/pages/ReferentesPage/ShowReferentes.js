import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"
import ReferenteItem from "../../components/ReferenteItem/ReferenteItem"

const ShowReferentes = () => {
    const [referentes , setReferentes] = useState()
    const {user} = useContext(SessionContext)
    //wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid']},'ReferenteGetAll')
    useEffect(() => !referentes && wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid']},'ReferenteGetAll'))

    const handleRef = (prop) => {}

    const handleRsp = (res) => {
        setReferentes(JSON.parse(res))
    }
    const handleError = () => {
        console.log('error referente get all')
    }

    return (
        <>
            {referentes ? referentes.map(item => <ReferenteItem item={item} setReferentes={setReferentes}/>) : <div>No existen referentes</div>}
            <Link to={'/updateref'}>Añadir referente</Link>
        </>
    )
}

export default ShowReferentes