import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage , ErrorPage, ReferentesPage , SignUp, PerfilPage, DocPage , EsquemaAWS, AddReferentePage} from "../pages/index"

export default function AppRouter () {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/referentes" element={<ReferentesPage/>}/>
                <Route path="/updateref" element={<AddReferentePage/>}/> 
                <Route path="/error" element={<ErrorPage/>}/>
                <Route path="/signup" element={<SignUp/>}/> 
                <Route path="/perfil" element={<PerfilPage/>}/>
                <Route path="/documentacion" element={<DocPage/>}/>
                <Route path="/EsquemaAWS" element={<EsquemaAWS/>}/>
            </Routes>
        </BrowserRouter>
    )
}