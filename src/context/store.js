import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reModal } from "./modal";

export const store = configureStore({
    reducer: combineReducers({
        favDatas: reModal,
    }),
})