import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";

export interface RootState {
    categories: {
        categories: any[];
        loading: boolean;
        error: string | null;
    };
}

const store = configureStore({
    reducer: {
        categories: categoryReducer,
    },
});

export default store;
