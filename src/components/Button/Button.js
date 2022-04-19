import styles from "./Button.module.css"

export default function Button({title , callback}){
    return(
        <button onClick={callback} className={styles.button}>{title}</button>
    )
}