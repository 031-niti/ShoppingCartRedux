import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productReducer'
import cartReducer from './Carts/cartReducer'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        carts: cartReducer,
    },
    devTools:true,
})