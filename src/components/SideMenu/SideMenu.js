import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"
import logo from "../../assets/logoHomo.png";

export default function SideMenu(){
    const items = [{title : 'Consulta 1' , method : 'ReferenteGetAll'} , {title : 'Consulta 2' , method : ''} , {title : 'Consulta 3' , method : 'UsuarioGetAll'} , {title : 'Consulta 4' , method : ''}]
    return(
        <div className={styles.menuContainer}>
            <img alt="" src={logo} className={styles.logo}/>
            {items.map(({title,method} , i) => <SideMenuItem title={title} method={method}/>)}
        </div>
    )
}