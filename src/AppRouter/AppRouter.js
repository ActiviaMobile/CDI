import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage , ErrorPage, ReferentesPage, AddReferentePage } from "../pages/index"

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/referentes" element={<ReferentesPage/>}/>
                <Route path="/updateref" element={<AddReferentePage/>}/>
                <Route path="/error" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}