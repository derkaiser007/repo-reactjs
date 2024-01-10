import { configureStore } from "@reduxjs/toolkit";
import { SliceReducer } from "./Slice";

const store = configureStore({
    reducer: {
        counter: SliceReducer
    }
})

export default store