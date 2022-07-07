import { SideMenu , WorkSpace , Header } from "../index";
import styles from "./Dashboard.module.css";
import { MenuProvider } from "../../context/menuContext";
import HorizontalShadow from "../SvgComponents/HorizontalShadow";

const Dashboard = ({display}) => {

    return (
        <MenuProvider>
            <div className={styles.container}>
                <Header/>
                <div className={styles.childContainer}>
                    <SideMenu />
                    <WorkSpace display={display}/>
                </div>
            </div>
        </MenuProvider>
    )
}

export default Dashboard;