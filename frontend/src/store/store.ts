import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import productsReducer from "./features/productSlice";

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
}

const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productsReducer,
    },
});

export default store;
