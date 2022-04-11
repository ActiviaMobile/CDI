import styles from "./SideMenuItem.module.css"
export default function SideMenuItem({title,route}){
    return(
        <button className={styles.menuItem}>{title}</button>
    )
}