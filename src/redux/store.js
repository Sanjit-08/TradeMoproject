import { configureStore } from "@reduxjs/toolkit";

import reducer1 from "../redux/productSlice";

export const store = configureStore({
  reducer: {
    
    product: reducer1,
  },
});