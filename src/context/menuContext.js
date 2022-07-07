import {createContext, useState} from 'react'

const MenuContext = createContext();

const menuInitialState = [    
    { id : 'MI PERFIL' , route: '/perfil' , isActive: true}, 
    { id : 'REFERENTES' , route: '/referentes' , isActive: false}, 
    { id : 'DOCUMENTACION' , route: '/documentacion' , isActive: false}, 
]

const MenuProvider = ({children}) => {

    const [menuState, setMenuState] = useState(menuInitialState)

    const updateMenuState = (id) => {
       const newMenuState = menuState.map(element => {element.id === id ? element.isActive = true : element.isActive = false})
       setMenuState(newMenuState)
    }
    const data = {
        updateMenuState,
        menuState,
    }

    return(
        <MenuContext.Provider value={data}>
            {children}
        </MenuContext.Provider>
    ) 
}
export { MenuProvider, MenuContext };