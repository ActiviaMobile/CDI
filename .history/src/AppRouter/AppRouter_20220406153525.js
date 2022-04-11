import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AmbitoPage from '../pages/RspPage';


export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/ambito" element={<AmbitoPage/>}/>
                <Route path="/etapa" element={<AmbitoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}