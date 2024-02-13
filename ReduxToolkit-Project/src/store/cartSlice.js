import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice( {
    name: "Cart",
    initialState,
    reducers: {
        add(state, action) {
            const productToAdd = action.payload;
            const existingProductIndex = state.findIndex(item => item.id === productToAdd.id)
            if(existingProductIndex != -1)
            {
                state[existingProductIndex].quantity++;
            }else{
            state.push(action.payload)
            }
        },
        remove(state,action){
            return state.filter(item => item.id!==action.payload)
         }
    }
});

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;


// add(state, action) {
//     state.push(action.payload)
// },