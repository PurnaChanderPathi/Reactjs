import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        Cart: cartSlice,
        products: productSlice
    }
})

export default store;