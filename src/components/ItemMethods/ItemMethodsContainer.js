import styles from "./ItemMethodsContainer.module.css"
import ItemMethods from './ItemMethods'

export default function ItemMethodsContainer () {
    return(
        <div className={styles.container}>
            <ItemMethods/>
        </div>
    )
}