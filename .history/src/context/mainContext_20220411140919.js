import {createContext, useState} from 'react'

const MainContext = createContext();

const MainProvider = ({children})=>{

    const [rsp, setRsp] = useState([])

    const updateRsp = (token) => {
        setRsp(token)
    }
    const data = {
        updateRsp,
        rsp,
    }

    return(
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    ) 
}
export { MainProvider, MainContext };