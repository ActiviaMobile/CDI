import { Link } from "react-router-dom"
import styles from "./SideMenuItem.module.css"

export default function SideMenuItem({title,id}){

    return(
        <div className={styles.menuItemContainer}>
            <Link to={`/${title}`} className={styles.menuItem}>{title}</Link>
        </div>
    )
}