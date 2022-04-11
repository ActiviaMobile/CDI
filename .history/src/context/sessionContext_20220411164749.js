import {createContext, useState} from 'react'

const SessionContext = createContext();

const SessionProvider = ({children})=>{
    const [user, setUser] = useState({})

    const updateUser = (userData) => {
        sessionStorage.setItem('user',JSON.stringify(userData))
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