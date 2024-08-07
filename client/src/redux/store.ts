import { configureStore } from "@reduxjs/toolkit";
import { htmlSlice } from "./htmlSlice";

export const store = configureStore({
    reducer: {
        htmlReducer: htmlSlice.reducer
    }
})