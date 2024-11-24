import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnderConstruction from "./Components/UnderConstruction/UnderConstruction";
import MainPage from "./Pages/MainPage/MainPage";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />}></Route>
                        <Route
                            path="/categories"
                            element={<CategoriesPage />}
                        ></Route>
                        <Route
                            path="/products"
                            element={<UnderConstruction />}
                        ></Route>
                        <Route
                            path="/sales"
                            element={<UnderConstruction />}
                        ></Route>
                        <Route path="*" element={<UnderConstruction />}></Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
