import { SideMenu , Main , Header , Button } from "../components/index";
import styles from "./HomePage.module.css";

const DashboardPage = ({user}) => {
    return (
        <div className={styles.pageRow}>
            <SideMenu/>
            <div className={styles.pageColumn}>
                <Header user={user['Nombre']}/>
                <Main/>
            </div>
        </div>
    )
}

export default DashboardPage;