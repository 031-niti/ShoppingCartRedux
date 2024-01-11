import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productReducer'
import cartReducer from './Carts/cartReducer'
import pageReducer from './pages/pageReducer'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        carts: cartReducer,
        pages: pageReducer,
    },
    devTools:true,
})