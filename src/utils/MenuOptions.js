import { Perfil , AddReferente , ShowReferentes , Doc} from "../pages/index"

const displayOptions = () => [
    { id: 0 , component: <Perfil/>}, 
    { id: 1 , component: <ShowReferentes/>},
    { id: 2 , component: <AddReferente/>}, 
    { id: 3 , component: <Doc/> }, 
    { id: 4 , component: '' }
]


export default displayOptions;