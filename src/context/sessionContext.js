import {createContext, useState} from 'react'

const SessionContext = createContext();

const SessionProvider = ({children})=>{
    const [user, setUser] = useState()
    const [softwares, setSoftwares] = useState([])

    const updateUser = (userData) => {
        localStorage.setItem('user',JSON.stringify(userData))
        setUser(userData)
    }
    const setSoftwareData = (softwaresData) => {
        setSoftwares(softwaresData)
    }
    const data = {
        setSoftwareData,
        updateUser,
        user,
        softwares
    }

    return(
        <SessionContext.Provider value={data}>
            {children}
        </SessionContext.Provider>
    ) 
}
export { SessionProvider, SessionContext };