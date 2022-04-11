import Methods from "./Methods"
import styles from "./MethodsList.module.css"

export default function MethodsList(){
    const lstObj = [{title : 'Ambito Get All', method : 'AmbitoGetAll' },{title : 'Etapa Get All' , method : 'EtapaGetAll'}]
    return(
        <div className={styles.methodsList}>
            {lstObj.map((element , i) => <Methods title={element.title} method={element.method} />)}
        </div>
    )
}