import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderPage from "./pages/headerPage/HeaderPage";
import FooterPage from "./pages/footerPage/FooterPage";
import Info from "./components/info/Info";
import ContactPage from "./pages/contactPage/ContactPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import InfoFooter from "./components/infoFooter/InfoFooter";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Info/>
                <Routes>
                    <Route path="/" element={<HeaderPage/>}/>
                    <Route path="/footer" element={<FooterPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
                <InfoFooter/>
            </div>
        </BrowserRouter>
    );
}
export default App;