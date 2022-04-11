import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import RspPage from '../pages/RspPage';


export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/rsp/:title/:method" element={<RspPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}