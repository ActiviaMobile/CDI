import { Link } from 'react-router-dom';
import styles from './Methods.module.css'

export default function Methods({title,method,id}){
    return(
        <Link to={`/rsp/${title}/${method}/${id}`} className={`${styles.methodsContainer} animate__animated animate__fadeIn`}>{title}</Link>
    )
}