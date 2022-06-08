import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"
import logo from "../../assets/logoHomo.png";
import {menuOptions} from "../../utils/MenuOptions";

export default function SideMenu(){
    const items = menuOptions()
    return(
        <div className={styles.menuContainer}>
            <img alt="" src={logo} className={styles.logo}/>
            {items.map(({title,route} , i) => <SideMenuItem title={title} route={route} key={i}/>)}
        </div>
    )
}