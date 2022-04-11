import {createContext, useState} from 'react'

const SessionContext = createContext();

const SessionProvider = ({children})=>{
    const userObj = {id : '', nombre : '' , token : ''}
    const [user, setUser] = useState(userObj)

    const updateUser = (userData) => {
        setUser(userData)
    }
    const data = {
        updateUser,
        user,
    }

    return(
        <SessionContext.Provider value={data}>
            {children}
        </SessionContext.Provider>
    ) 
}
export { SessionProvider, SessionContext };