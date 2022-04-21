import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"
import logo from "../../assets/logoHomo.png";
import menuOptions from "../../utils/MenuOptions";

export default function SideMenu({setDisplay}){
    const items = menuOptions()
    return(
        <div className={styles.menuContainer}>
            <img alt="" src={logo} className={styles.logo}/>
            {items.map(({title,id} , i) => <SideMenuItem title={title} id={id} setDisplay={setDisplay}/>)}
        </div>
    )
}