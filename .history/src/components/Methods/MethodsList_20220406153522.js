import Methods from "./Methods"
import styles from "./MethodsList.module.css"

export default function MethodsList(){
    const lstObj = [{title : 'Ambito Get All', method : 'AmbitoGetAll' , route : 'ambito'},{title : 'Etapa Get All' , method : 'EtapaGetAll' , route : 'etapa'}]
    return(
        <div className={styles.methodsList}>
            {lstObj.map((element , i) => <Methods title={element.title} method={element.method} route={element.route}/>)}
        </div>
    )
}