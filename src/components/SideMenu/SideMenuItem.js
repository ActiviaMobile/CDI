import { Link } from "react-router-dom"
import styles from "./SideMenuItem.module.css"

export default function SideMenuItem({title,route}){

    return(
        <div className={styles.menuItemContainer}>
            <Link to={route} className={styles.menuItem}>{title}</Link>
        </div>
    )
}