import { configureStore } from "@reduxjs/toolkit";
import countSlice from './countSlice'

const store = configureStore({
    reducer: {
        Count : countSlice
    }
})

export default store