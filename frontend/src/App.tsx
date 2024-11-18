import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnderConstruction from "./Components/UnderConstruction/UnderConstruction";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<UnderConstruction />}></Route>
                        <Route
                            path="/categories"
                            element={<UnderConstruction />}
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
