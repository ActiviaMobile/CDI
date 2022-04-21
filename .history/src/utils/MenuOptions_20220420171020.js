import { Home , AddReferentes , ShowReferentes } from "../pages/index"

const menuOptions = () => [{ route: '', id: 1, component: <Home/>}, { route: 'referentes', id: 2, component: [<AddReferentes/> , <ShowReferentes/>] }, { route: 'Consulta 3', id: 3, component: '' }, { route: 'Consulta 4', id: 4, component: '' }]


export default menuOptions;