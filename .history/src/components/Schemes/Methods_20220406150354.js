import {Link} from 'react-router-dom'
import styles from './Methods.module.css'

export default function Methods(props){
    const {title,route} = props
    return(
        <Link to={route} className={`${styles.methodsContainer} animate__animated animate__fadeIn`}>{title}</Link>
    )
}