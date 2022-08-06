import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HeaderPage from "./pages/headerPage/HeaderPage";
import FooterPage from "./pages/footerPage/FooterPage"
import UserPage from "./pages/userPage/UserPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Footer/>
                <AboutPage/>
                <Routes>
                    <Route path="/" element={HeaderPage}/>
                    <Route path="/pages" element={FooterPage}/>
                    <Route path="/user" element={UserPage}/>
                    <Route path="/about" element={AboutPage}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;