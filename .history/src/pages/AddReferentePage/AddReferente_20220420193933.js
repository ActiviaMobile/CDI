import { useState } from "react"
import Form from "./Form"

const AddReferente = () => {

    const [isLoading , setIsLoading] = useState(false)
    const [isResolve, setIsResolve] = useState(false)

    return(
        isLoading ? <div>loading</div> : isResolve ? <div>referente creado OK</div> : <Form/>
    )
}

export default AddReferente