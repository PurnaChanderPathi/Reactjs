import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const countSlice = createSlice( {
    name: "Count",
    initialState,
    reducers: {
        add(state, action) {
            console.log("payload", action?.payload);
                state.push(action.payload);
        }
    }

})

export const {add} = countSlice.actions;
export default countSlice.reducer;