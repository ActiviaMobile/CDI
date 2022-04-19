import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage , ErrorPage } from "../pages/index"

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/error" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}