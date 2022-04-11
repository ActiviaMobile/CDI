import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"

export default function SideMenu(){
    const items = [{title : 'Referentes' , method : ''} , {title : 'Episodios' , method : ''} , {title : 'Usuarios' , method : 'UsuarioGetAll'} , {title : 'Consulta 2' , method : ''}]
    return(
        <div className={styles.menuContainer}>
            {items.map(({title,route} , i) => <SideMenuItem title={title} route={route}/>)}
        </div>
    )
}