import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import productsReducer from "./features/productSlice";
import productsCtgReducer from "./features/productsCtgSlice";
import filtersReducer from "./features/filtersSlice";
import itemReducer from "./features/itemSlice";
import cartReducer from "./features/cartSlice";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    discont_price: number | null;
    image: string;
    quantity: number;
}

export interface RootState {
    categories: {
        categories: any[];
        loading: boolean;
        error: string | null;
    };
    products: {
        products: any[];
        loading: boolean;
        error: string | null;
    };
    productsCtg: {
        productsCtg: any[];
        loading: boolean;
        error: string | null;
    };
    item: {
        item: any[];
        loading: boolean;
        error: string | null;
    };
    filters: {
        minPrice: number | null;
        maxPrice: number | null;
        sortBy: "priceAsc" | "priceDesc" | null;
        showDisconted: boolean;
    };
    cart: {
        items: CartItem[];
    };
}

const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productsReducer,
        productsCtg: productsCtgReducer,
        item: itemReducer,
        filters: filtersReducer,
        cart: cartReducer,
    },
});

export default store;
