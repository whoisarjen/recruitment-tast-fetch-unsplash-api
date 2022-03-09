import './global.css';
import Home from './pages/home';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Photos from './pages/photos';

render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/photos/:find" element={<Photos />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);