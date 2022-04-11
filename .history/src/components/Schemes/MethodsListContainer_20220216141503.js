import SchemesList from "./SchemesList"
import styles from './SchemesListContainer.module.css'

export default function SchemesListContainer (){
    return(
        <div className={styles.schemeListContainer}>
            <SchemesList/>
        </div>
    )
}