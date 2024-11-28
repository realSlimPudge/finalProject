import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface FormData {
    name: string;
    phone: string;
    email: string;
}

export const submitForm = createAsyncThunk(
    "saleSend/submit",
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "http://localhost:3333/sale/send",
                formData
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const saleSendSlice = createSlice({
    name: "saleSend",
    initialState: {
        loading: false,
        error: null as string | null,
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default saleSendSlice.reducer;
