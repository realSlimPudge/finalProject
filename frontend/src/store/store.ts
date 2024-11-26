import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import productsReducer from "./features/productSlice";
import productsCtgReducer from "./features/productsCtgSlice";
import filtersReducer from "./features/filtersSlice";

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
    filters: {
        minPrice: number | null;
        maxPrice: number | null;
        sortBy: "priceAsc" | "priceDesc" | null;
        showDisconted: boolean;
    };
}

const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productsReducer,
        productsCtg: productsCtgReducer,
        filters: filtersReducer,
    },
});

export default store;
