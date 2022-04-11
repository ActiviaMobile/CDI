import MethodsList from "./MethodsList"
import styles from './MethodsListContainer.module.css'

export default function MethodsListContainer() {
    return ( <
        div className = { styles.schemeListContainer } >
        <
        MethodsList / >
        <
        /div>
    )
}