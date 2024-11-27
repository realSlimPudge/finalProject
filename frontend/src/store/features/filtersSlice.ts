import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: RootState = {
    minPrice: null,
    maxPrice: null,
    sortBy: null,
    showDisconted: false,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setMinPrice: (state, action: PayloadAction<number | null>) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action: PayloadAction<number | null>) => {
            state.maxPrice = action.payload;
        },
        setSortBy: (
            state,
            action: PayloadAction<"priceAsc" | "priceDesc" | null>
        ) => {
            state.sortBy = action.payload;
        },
        setShowDisconted: (state, action: PayloadAction<boolean>) => {
            state.showDisconted = action.payload;
        },
    },
});

export const { setMinPrice, setMaxPrice, setSortBy, setShowDisconted } =
    filtersSlice.actions;
export default filtersSlice.reducer;
