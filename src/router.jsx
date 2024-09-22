import { BrowserRouter, Routes, Route } from "react-router-dom"; import React from 'react';
import Home from "./pages/Home";

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}