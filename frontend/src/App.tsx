import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import UnderConstruction from "./Components/UnderConstruction/UnderConstruction";
import MainPage from "./Pages/MainPage/MainPage";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import ProductsCategories from "./Pages/ProductsCategories/ProductsCategories";
import AllProducts from "./Pages/AllProductsPage/AllProductsPage";
import AllSalesPage from "./Pages/AllSalesPage/AllSalesPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route
                            path="/categories"
                            element={<CategoriesPage />}
                        />
                        <Route
                            path="/categories/:categoryId"
                            element={<ProductsCategories />}
                        />
                        <Route path="/products" element={<AllProducts />} />
                        <Route
                            path="/products/:productId"
                            element={<ProductPage />}
                        />
                        <Route path="/sales" element={<AllSalesPage />} />
                        <Route path="/order" element={<CartPage />} />
                        <Route path="*" element={<UnderConstruction />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
