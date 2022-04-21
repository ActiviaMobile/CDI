import AddReferente from "./AddReferente"
import ShowReferentes from "./ShowReferentes"
import styles from "./ReferentesPage.module.css"

const ReferentesPage = () => {
    return (
        <div className={styles.page}>
            {true ? <ShowReferentes/> : <AddReferente/>}
        </div>
    )
}

export default ReferentesPage