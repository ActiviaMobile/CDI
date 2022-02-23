import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import SafPage from '../pages/SafPage';


export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/saf" element={<SafPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}