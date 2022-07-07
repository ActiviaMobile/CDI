import { Link } from "react-router-dom"
import styles from "./SideMenuItem.module.css"
import { MenuContext } from "../../context/menuContext"
import { useContext } from "react"

export default function SideMenuItem({title,route,isActive}){

    const {updateMenuState} = useContext(MenuContext)

    return(
        <div className={styles.container}>
            <Link onClick={() => updateMenuState(title)} to={route} className={styles.menuItem}>{title}</Link>            
        </div>

        
    )
}