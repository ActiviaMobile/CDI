import { useState } from "react"
export default function LoginPage(){

const [userName,setUserName] = useState('')    
const [userPass,setUserPass] = useState('')   

    return(
        <div>
            <input onChange={e => setUserName(e.target.value)} value={userName}></input>
            <input onChange={e => setUserPass(e.target.value)} value={userPass}></input>
        </div>
    )
}