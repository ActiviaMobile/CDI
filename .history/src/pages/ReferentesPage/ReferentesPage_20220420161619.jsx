import {AddReferente} from "./AddReferente"
import {ShowReferentes} from "./ShowReferentes"
import styles from "./ReferentesPage.module.css"

const ReferentesPage = ({stage}) => {
    return (
        <div className={styles.page}>
            {false ? <ShowReferentes/> : <AddReferente/>}
        </div>
    )
}