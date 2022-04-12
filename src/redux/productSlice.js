
  
import { createSlice } from "@reduxjs/toolkit";
import proddata from "../products";

const initialState = {
  data: proddata.products
};

const productSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getProduct(state,action) {
       state.data= action.payload.filterdata;
    console.log("Payload",action.payload);
    },
   
  },
});

export const { getProduct } = productSlice.actions;

export default productSlice.reducer;