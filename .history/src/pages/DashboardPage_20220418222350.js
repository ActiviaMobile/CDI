import { SideMenu , Main , Header } from "../components/index";
import styles from "./HomePage.module.css";

const DashboardPage = ({user}) => {
    console.log('usuario : ', user)
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