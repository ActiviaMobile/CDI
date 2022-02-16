import { useContext } from 'react'
import { SessionContext } from '../../context/sessionContext';
import { ambitoGetAll , etapaGetAll} from '../../WsRequest/WsRequest'
import styles from './ItemMethods.module.css'

export default function ItemMethods(){
    const {token} = useContext(SessionContext);
    const methods = [{title : 'Ambito' , callback : () => ambitoGetAll(token)} , {title : 'Etapas',callback : () => etapaGetAll(token)}]

    return(
        <div className={styles.container}>
            {
                methods.map(element =>  <button onClick={element.callback}>{element.title}</button>)
            }
        </div>
    )
}