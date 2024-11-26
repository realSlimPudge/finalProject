import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsCtg = createAsyncThunk(
    "productsCtg/fetchProductsCtg",
    async (categoryId: string) => {
        const response = await axios.get(
            `http://localhost:3333/categories/${categoryId}`
        );
        return response.data;
    }
);

const productsCtgSlice = createSlice({
    name: "productsCtg",
    initialState: {
        productsCtg: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsCtg.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductsCtg.fulfilled, (state, action) => {
                state.loading = false;
                state.productsCtg = action.payload;
            })
            .addCase(fetchProductsCtg.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productsCtgSlice.reducer;
