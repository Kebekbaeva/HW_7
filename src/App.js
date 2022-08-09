import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderPage from "./pages/headerPage/HeaderPage";
import FooterPage from "./pages/footerPage/FooterPage";
import Info from "./components/info/Info";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Info/>
                <Routes>
                    <Route path="/" element={<HeaderPage/>}/>
                    <Route path="/footer" element={<FooterPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;