import { useEffect, useState , useRef , useContext} from "react"
import { SessionContext } from "../../context/sessionContext"
import { Button , Input } from "../../components/index"
import {wsRequest} from "../../WsRequest/WsRequest"
import { AddReferente } from ".."

const AddReferentePage = () => {
    return(
        <AddReferente/>
    )
}

export default AddReferentePage