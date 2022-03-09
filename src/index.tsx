import './global.css';
import Home from './pages/home';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);