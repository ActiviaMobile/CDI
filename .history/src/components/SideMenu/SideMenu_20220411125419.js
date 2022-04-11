import SideMenuItem from "./SideMenuItem"
import styles from "./SideMenu.module.css"

export default function SideMenu(){
    const items = [{title : 'Referentes' , route : ''} , {title : 'Episodios' , route : ''}]
    return(
        <div style={styles.menuContainer}>
            {items.map(({title,route} , i) => <SideMenuItem title={title} route={route}/>)}
        </div>
    )
}