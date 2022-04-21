import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"
import logo from "../../assets/logoHomo.png";

import { ReferentesPage } from "../../pages/index";

export default function SideMenu({setDisplay}){
    console.log('opciones de menu' , sideMenuItems)
    const sideMenuItems = [{ title: 'Referentes', id: 0, component: <ReferentesPage/>}, { title: 'Consulta 2', id: 1, component: '' }, { title: 'Consulta 3', id: 2, component: '' }, { title: 'Consulta 4', id: 3, component: '' }]
    return(
        <div className={styles.menuContainer}>
            <img alt="" src={logo} className={styles.logo}/>
            {sideMenuItems.map(({title,id} , i) => <SideMenuItem title={title} id={id} setDisplay={setDisplay}/>)}
        </div>
    )
}