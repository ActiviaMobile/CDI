import { Home , AddReferentes , ShowReferentes } from "../pages/index"

const menuOptions = () => [{ title: 'Home', id: 1, component: <Home/>}, { title: 'AddReferentes', id: 2, component: [<AddReferentes/> , <ShowReferentes/>] }, { title: 'Consulta 3', id: 3, component: '' }, { title: 'Consulta 4', id: 4, component: '' }]


export default menuOptions;