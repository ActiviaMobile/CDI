import { useEffect, useState } from "react";
import { SideMenu , Main , Header } from "../index";
import styles from "../../pages/HomePage/HomePage.module.css";

const Dashboard = ({display}) => {
    // const [display , setDisplay] = useState(null)
    useEffect( () => console.log('display : ', display) )
    return (
        <div className={styles.pageRow}>
            <SideMenu />
            <div className={styles.pageColumn}>
                <Header/>
                <Main display={display}/>
            </div>
        </div>
    )
}

export default Dashboard;