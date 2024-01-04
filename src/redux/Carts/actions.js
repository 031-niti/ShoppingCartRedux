import { ADD_TO_CART, 
    REMOVE_TO_CART, 
    INCREASE_QUANTITY, 
    DECREASE_QUANTITY 
} from "./actionsTypes"

export const addToCart = (product) =>{
    return{
        type: ADD_TO_CART,
        payload: product,
    }
}

export const removeToCart = (productId) => {
    return {
        type: REMOVE_TO_CART,
        payload: productId,
    }
}

export const increaseQuantity = (productId) => {
    return {
        type: INCREASE_QUANTITY,
        payload: productId,
    }
}

export const decreaseQuantity = (productId) => {
    return {
        type: DECREASE_QUANTITY,
        payload: productId,
    }
}