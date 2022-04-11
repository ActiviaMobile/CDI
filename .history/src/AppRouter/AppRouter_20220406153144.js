import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AmbitoPage from '../pages/AmbitoPage';


export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/ambito" element={<AmbitoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}