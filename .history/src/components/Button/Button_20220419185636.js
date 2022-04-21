import styles from "./Button.module.css"

export default function Button({title , callback , isActive}){
    return(
        <button disabled={isActive} onClick={callback} className={isActive ? styles.activeButton : styles.disableButton}>{title}</button>
    )
}