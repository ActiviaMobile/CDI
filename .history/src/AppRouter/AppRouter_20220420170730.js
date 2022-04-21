import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage , ErrorPage, ReferentesPage } from "../pages/index"

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/referentes" element={<ReferentesPage/>}/>
                <Route path="/error" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}