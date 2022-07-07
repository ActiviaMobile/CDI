import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"
import ReferenteItem from "../../components/ReferenteItem/ReferenteItem"

const ShowReferentes = () => {
    const [referentes , setReferentes] = useState([])
    const {user} = useContext(SessionContext)

    useEffect(() => {
        wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user.TokenGuid},'ReferenteGetAll')},[])

    const handleRef = (prop) => {}

    const handleRsp = (res) => {
        const json = JSON.parse(res);
        console.log(json)
        setReferentes(json)}


    const handleError = () => console.log('error referente get all')


    return (
        <>
            {referentes.length ? referentes.map((item , i) => <ReferenteItem key={i} item={item} setReferentes={setReferentes}/>) : <div>No existen referentes</div>}
            <Link to={'/updateref'}>Añadir referente</Link>
        </>
    )
}

export default ShowReferentes