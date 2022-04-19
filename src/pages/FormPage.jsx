import { useState } from "react"

export default function FormPage(){
    const [referente , setReferente] = useState({name: "" , email: "" , phone: ""})

    return(
        <div>
            <input placeholder="Name"  onChange={(e) => {
                setReferente({ ...referente, name: e.target.value})
            }}/>
            <input placeholder="Email"  onChange={(e) => {
                setReferente({ ...referente, email: e.target.value})
            }}/>
            <input placeholder="Phone number" onChange={(e) => {
                setReferente({ ...referente, phone: e.target.value})
            }}/>
        </div>
    )
}