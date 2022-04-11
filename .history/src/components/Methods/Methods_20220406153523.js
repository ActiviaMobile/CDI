import { Link } from 'react-router-dom';
import styles from './Methods.module.css'

export default function Methods(props){
    return(
        <Link to='rsp' className={`${styles.methodsContainer} animate__animated animate__fadeIn`}>{props.title}</Link>
    )
}