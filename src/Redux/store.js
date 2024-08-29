import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

// provide this store to  index component
const store = configureStore({
  reducer: {
    // cart slice
    cart: cartReducer,
    // products sclice
    products: productReducer,
  },
});

export default store;
