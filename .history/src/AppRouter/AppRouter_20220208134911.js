import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";


export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={LoginPage}/>
            </Routes>
        </BrowserRouter>
    )
}