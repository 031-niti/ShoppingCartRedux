import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productReducer'

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
})