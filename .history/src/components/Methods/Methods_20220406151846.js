import { useContext } from 'react';
import styles from './Methods.module.css'
import { wsRequest } from "../WsRequest/WsRequest";
import { SessionContext } from '../../context/sessionContext';

export default function Methods(props){
    const {token} = useContext(SessionContext);
    const {title,method,key} = props
    return(
        <button onClick={() => wsRequest(token,method,'')} className={`${styles.methodsContainer} animate__animated animate__fadeIn`}>{title}</button>
    )
}