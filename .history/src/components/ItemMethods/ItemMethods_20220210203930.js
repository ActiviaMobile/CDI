import { useContext } from 'react'
import { ambitoGetAll , etapaGetlAll} from '../../WsRequest/WsRequest'
import styles from './ItemMethods.module.css'

export default function ItemMethods(){
    const {token} = useContext();
    const methods = [{0 : () => ambitoGetAll(token)} , {1 : () => etapaGetlAll(token)}]

    return(
        <div className={styles.container}>

        </div>
    )
}