import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"

export default function SideMenu(){
    const items = [{title : 'Referentes' , route : ''} , {title : 'Episodios' , route : ''} , {title : 'Consulta 1' , route : ''} , {title : 'Consulta 2' , route : ''}]
    return(
        <div className={styles.menuContainer}>
            {items.map(({title,route} , i) => <SideMenuItem title={title} route={route}/>)}
        </div>
    )
}