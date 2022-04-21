import { useState } from "react";
import { SideMenu , Main , Header } from "../components/index";
import styles from "./HomePage.module.css";

const DashboardPage = ({user}) => {
    const [display , setDisplay] = useState(null)

    return (
        <div className={styles.pageRow}>
            <SideMenu setDisplay={setDisplay}/>
            <div className={styles.pageColumn}>
                <Header user={user['Nombre']}/>
                <Main display={display}/>
            </div>
        </div>
    )
}

export default DashboardPage;