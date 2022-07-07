import { useContext } from "react";
import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"
import { MenuContext } from "../../context/menuContext";


export default function SideMenu(){

    const {menuState} = useContext(MenuContext);

    return(
        <div className={styles.menuContainer}>
            <div style={{paddingTop : '50px'}}>
            {menuState.map(({id,route,isActive} , i) => <SideMenuItem title={id} route={route} key={i} isActive={isActive}/>)}
            </div>
            <SideMenuItem title={'CERRAR SESION'} route={""} />
        </div>
    )
}