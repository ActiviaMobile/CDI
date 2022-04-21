import styles from "./SideMenuItem.module.css"

export default function SideMenuItem({title,id,setDisplay}){

    return(
        <div className={styles.menuItemContainer}>
            <button onClick={() => setDisplay(id)} className={styles.menuItem}>{title}</button>
        </div>
    )
}