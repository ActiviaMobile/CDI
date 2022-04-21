import AddReferente from "../AddReferentePage/AddReferentePage"
import ShowReferentes from "./ShowReferentes"
import styles from "./ReferentesPage.module.css"
import { useState } from "react"
import { Dashboard } from "../../components"

const ReferentesPage = () => {
    return (
        <Dashboard display={1}/>
    )
}

export default ReferentesPage


{/* <div className={styles.page}>
{stage ? <ShowReferentes setStage={setStage}/> : <AddReferente setStage={setStage}/>}
</div> */}