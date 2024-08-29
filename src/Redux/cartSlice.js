import { createSlice } from '@reduxjs/toolkit';

// Load saved cart from localStorage
const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    // array of saved products or [] if local storage is empty
    cart: savedCart,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // function make changes in state add , remove 
    reducers: {
        // add to cart steps
        addProductToCart: (state, action) => {
            const product = action.payload;
            // check if it is already exist in cart loop with id to find
            const existingProduct = state.cart.find(item => item.id === product.id);
            
            if (existingProduct) {
                existingProduct.count += 1;
            } else {
                // take copy of object then Add the new product with count 1
                state.cart.push({ ...product, count: 1 });
            }

            // Save  cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        // remove steps filter or splice then save to local storage after remove
        removeProductFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
