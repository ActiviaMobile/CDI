import Schemes from "./Schemes"
import styles from "./SchemesList.module.css"

export default function SchemesList(){
    const lstObj = [{title : 'Esquema SAF', route : 'saf' },{title : 'Esquema WS' , route : 'WS'}]
    console.log(lstObj.keys())
    return(
        <div className={styles.schemesList}>
            {lstObj.map((element , i) => <Schemes title={element.title} route={element.route} key={i} />)}
        </div>
    )
}