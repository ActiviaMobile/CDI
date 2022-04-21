import { useContext, useEffect } from "react"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"

const ShowReferentes = () => {
    const {user} = useContext(SessionContext)
    useEffect(() => wsRequest(handleRef,handleRsp,handleError,{'tokenUsuario' : user['TokenGuid']},'ReferenteGetAll'))

    const handleRef = () => {}
    const handleRsp = (res) => {
        const json = JSON.parse(res)
        console.log(json)
    }
    const handleError = () => {
        console.log('error referente get all')
    }

    return (
        <>

        </>
    )
}

export default ShowReferentes