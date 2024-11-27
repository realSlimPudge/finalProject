import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItem = createAsyncThunk(
    "item/fetchItem",
    async (itemId: string) => {
        const response = await axios.get(
            `http://localhost:3333/products/${itemId}`
        );
        return response.data;
    }
);

const itemSlice = createSlice({
    name: "item",
    initialState: {
        item: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchItem.fulfilled, (state, action) => {
                state.loading = false;
                state.item = action.payload;
            })
            .addCase(fetchItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default itemSlice.reducer;
