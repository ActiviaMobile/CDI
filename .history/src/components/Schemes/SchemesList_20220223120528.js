import Schemes from "./Schemes"
import styles from "./SchemesList.module.css"

export default function SchemesList(){
    const lstObj = [{title : 'Esquema SAF', route : 'saf'},{title : 'Esquema WS' , route : 'WS'}]
    return(
        <div className={styles.schemesList}>
            {lstObj.map(element => <Schemes title={element.title} route={element.route} />)}
        </div>
    )
}