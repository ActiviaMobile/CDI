import SideMenuItem from "./SideMenuItem"

export default function SideMenu(){
    const items = [{title : 'Referentes' , route : ''} , {title : 'Episodios' , route : ''}]
    return(
        items.map(({title,route} , i) => <SideMenuItem title={title} route={route}/>)
    )
}