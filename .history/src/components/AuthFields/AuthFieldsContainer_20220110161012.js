import { useState } from "react"

export default function AuthFieldsContainer(){
    
const [userName,setUserName] = useState('')    
const [userPass,setUserPass] = useState('')  

    return(
        <div className="authfields-container">
            <input onChange={e => setUserName(e.target.value)} value={userName}></input>
            <input onChange={e => setUserPass(e.target.value)} value={userPass}></input>
        </div>
    )
}