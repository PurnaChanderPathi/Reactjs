import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:null,
    loading:false,
    error:null,
   
}


 export const productSlice = createSlice( {
    name: "products",
    initialState,
     reducers: {
    fetchProductsPending: state => {
      state.loading = true;
    },
    fetchProductsFulfilled: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductsRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});


export const { fetchProductsPending, fetchProductsFulfilled, fetchProductsRejected } = productSlice.actions;
export default productSlice.reducer;

export const getProduct = () => async (dispatch) => {
    // const data = await fetch('https://fakestoreapi.com/products');
   
    // const result = await data.json();
    // dispatch(fetchProducts(result))
    try {
      dispatch(fetchProductsPending); // Dispatch the pending action
      const data = await fetch('https://fakestoreapi.com/products');
      const result = await data.json();
      dispatch(fetchProductsFulfilled(result)); // Dispatch the fulfilled action with payload
    } catch (error) {
      dispatch(fetchProductsRejected(error.message)); // Dispatch the rejected action with error
      console.error('Error fetching products:', error);
    }
}