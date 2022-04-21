import AddReferente from "./AddReferente"
import ShowReferentes from "./ShowReferentes"
import styles from "./ReferentesPage.module.css"
import { useState } from "react"

const ReferentesPage = () => {
    const [stage, setStage] = useState(true)
    return ( <
        div className = { styles.page } > { stage ? < ShowReferentes setStage = { setStage } /> : <AddReferente setStage={setStage}/ > } <
        /div>
    )
}

export default ReferentesPage