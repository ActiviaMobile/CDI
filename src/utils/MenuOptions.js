import { Home , AddReferente , ShowReferentes } from "../pages/index"

const menuOptions = () => [
    { title : 'Home' , route: '/'}, 
    { title : 'Referentes' , route: '/referentes'}, 
    { title : 'Consulta 3' , route: '/Consulta 3'}, 
    { title : 'Consulta 4' , route: '/Consulta 4'},
    { title : 'Sign Up'    , route: '/SignUp'},

]
const displayOptions = () => [
    { id: 0 , component: <Home/>}, 
    { id: 1 , component: <ShowReferentes/>},
    { id: 2 , component: <AddReferente/>}, 
    { id: 3 , component: '' }, 
    { id: 4 , component: '' }
]


export {menuOptions,displayOptions};