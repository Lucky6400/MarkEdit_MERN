import { createSlice } from "@reduxjs/toolkit";

export const htmlSlice = createSlice({
    name: 'html',
    initialState: {
        html: ''
    },
    reducers: {
        setHtml(state, action) {
            state.html = action.payload;
        }
    }
});

export const { setHtml } = htmlSlice.actions