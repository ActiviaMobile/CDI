import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"
import logo from "../../assets/logoHomo.png";
import sideMenuItems from "../../utils/SideMenuOptions"

export default function SideMenu({setDisplay}){
    return(
        <div className={styles.menuContainer}>
            <img alt="" src={logo} className={styles.logo}/>
            {sideMenuItems.map(({title,id} , i) => <SideMenuItem title={title} id={id} setDisplay={setDisplay}/>)}
        </div>
    )
}