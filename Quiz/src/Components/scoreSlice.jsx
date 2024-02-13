import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const scoreSlice = createSlice( {
    name: "Score",
    initialState,
    reducers: {
        add(state, action) {
            console.log("payload",action?.payload);

            state.push(action.payload)
        },
    }
});

export const {add} = scoreSlice.actions;
export default scoreSlice.reducer;