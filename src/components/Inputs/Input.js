import styles from "./Input.module.css"

const Input = ({placeholder , callback}) => {
    return(
        <input className={styles.input} placeholder={placeholder} onChange={ e =>  callback(e.target.value)}/>
    )
}

export default Input;