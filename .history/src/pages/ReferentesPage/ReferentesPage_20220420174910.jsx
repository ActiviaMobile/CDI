import AddReferente from "./AddReferente"
import ShowReferentes from "./ShowReferentes"
import styles from "./ReferentesPage.module.css"
import { useState } from "react"
import { Dashboard } from "../../components"

const ReferentesPage = () => {
    const [stage , setStage] = useState(1)
    return (
        <Dashboard display={stage}/>
    )
}

export default ReferentesPage


{/* <div className={styles.page}>
{stage ? <ShowReferentes setStage={setStage}/> : <AddReferente setStage={setStage}/>}
</div> */}