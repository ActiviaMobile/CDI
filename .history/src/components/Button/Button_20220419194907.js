import styles from "./Button.module.css"

export default function Button({title , callback , isDisable}){
    return(
        <button disabled={isDisable} onClick={callback} className={isDisable ? styles.disableButton : styles.activeButton}>{title}</button>
    )
}