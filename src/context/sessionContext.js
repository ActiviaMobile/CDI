import {createContext, useState} from 'react'

const SessionContext = createContext();

const SessionProvider = ({children})=>{

    const [token, setToken] = useState([])

    const updateToken = (token) => {
        setToken(token)
    }
    const data = {
        updateToken,
        token,
    }

    return(
        <SessionContext.Provider value={data}>
            {children}
        </SessionContext.Provider>
    ) 
}
export { SessionProvider, SessionContext };