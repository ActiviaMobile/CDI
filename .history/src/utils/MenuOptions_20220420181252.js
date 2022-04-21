import { Home , AddReferente , ShowReferentes } from "../pages/index"

const menuOptions = () => [{ title : 'Home' , route: '/', id: 1}, { title : 'Referentes' , route: 'referentes', id: 2}, { title : 'Consulta 3' , route: 'Consulta 3', id: 3}, { title : 'Consulta 4' , route: 'Consulta 4', id: 4}]
const displayOptions = () => [{ id: 0, component: <Home/>}, { id: 1, component: <ShowReferentes/>},{id: 2 ,component : <AddReferente/>}, { id: 3, component: '' }, { id: 4, component: '' }]


export {menuOptions,displayOptions};