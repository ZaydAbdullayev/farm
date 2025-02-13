import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reModal } from "./modal";
import { reWheat } from "./wheat";

export const store = configureStore({
    reducer: combineReducers({
        modals: reModal,
        maked: reWheat,
    }),
})