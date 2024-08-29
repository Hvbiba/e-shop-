import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// function to fetch products will use it in rxtra reducers
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    }
);

// function to fetch search result by input value
export const fetchResult = createAsyncThunk(
    'products/fetchResultSearch',
    async (value) => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${value}`);
        const data = await response.json();
        return data.products;
    }
);

const initialState = {
    products: [], // start as empty array no products
    searchTerm: '', // input value as empty string => no value
    filteredData: [], // start as empty array no products => all products with out no category
};


// any slice needs name , value , reducers => change in state , extra => fetch data
// function in reducer that change state takes (state , action) 
// payload is argument "data"
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchResult.fulfilled, (state, action) => {
                state.filteredData = action.payload;
            });
    },
});

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
