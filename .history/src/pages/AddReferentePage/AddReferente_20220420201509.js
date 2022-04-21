import { useState } from "react"
import Form from "./Form"
import RspAddReferente from "./RspAddReferente"

const AddReferente = () => {

    const [isLoading , setIsLoading] = useState(false)
    const [res, setRes] = useState(false)

    return(
        res ? <RspAddReferente res={res}/> : isLoading ? <div>loading</div> : <Form setIsLoading={setIsLoading} setRes={setRes}/>
    )
}

export default AddReferente