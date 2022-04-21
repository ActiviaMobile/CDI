import { Home , AddReferente , ShowReferentes } from "../pages/index"

const menuOptions = () => [{ route: 'Home', id: 1, component: <Home/>}, { route: 'referentes', id: 2, component: [<AddReferente/> , <ShowReferentes/>] }, { route: 'Consulta 3', id: 3, component: '' }, { route: 'Consulta 4', id: 4, component: '' }]


export default menuOptions;