import { Home , AddReferente , ShowReferentes } from "../pages/index"

const menuOptions = () => [{ title : 'Home' , route: '/', id: 1, component: <Home/>}, { title : 'Referentes' , route: 'referentes', id: 2, component: [<AddReferente/> , <ShowReferentes/>] }, { title : 'Consulta 3' , route: 'Consulta 3', id: 3, component: '' }, { title : 'Consulta 4' , route: 'Consulta 4', id: 4, component: '' }]
const displayOptions = () => [{ id: 1, component: <Home/>}, { id: 2, component: <AddReferente/>},{id: 3 ,component : <ShowReferentes/>}, { id: 3, component: '' }, { id: 4, component: '' }]


export default menuOptions && displayOptions;