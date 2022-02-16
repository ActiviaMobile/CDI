import styles from './Schemes.module.css'

export default function Schemes(props){
    const {title,route} = props
    return(
        <div className={styles.schemesContainer}>{title}</div>
    )
}