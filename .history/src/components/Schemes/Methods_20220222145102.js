import styles from './Schemes.module.css'
import {Link} from 'react-router-dom'

export default function Schemes(props){
    const {title,route} = props
    return(
        <Link to={route} className={`${styles.schemeContainer} animate__animated animate__fadeIn`}>{title}</Link>
    )
}