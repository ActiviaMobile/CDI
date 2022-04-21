import { useState } from "react"
import Form from "./Form"

const AddReferente = () => {
    
    const [isLoading , setIsLoading] = useState()
    const [isResolve, setIsResolve] = useState()

    return(
        isLoading ? <div>loading</div> : isResolve ? <div>referente creado OK</div> : <Form/>
    )
}

export default AddReferente