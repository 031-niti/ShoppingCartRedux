import { ADD_TO_CART, 
    REMOVE_TO_CART, 
    INCREASE_QUANTITY, 
    DECREASE_QUANTITY } from "./actionsTypes"
import { initialState } from './initialState';

const nextId = (state) => {
    return state.reduce((id, state) => Math.max(id, state.id), -1) + 1;
}

const findProductInCart = (state, action) =>{
    return state.find((p) =>p.productId === action.payload.id);
}

//cartReducer จะทำการรับค่ามา 2 ค่า คือ state และ action
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const product = findProductInCart(state, action);
            if (product) {
                return state.map((p) => {
                    if (p.productId === product.productId) {
                        return {
                            ...p,
                            quantity: p.quantity + 1
                        };
                    } else {
                        return p;
                    }
                });
            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        id: nextId(state),
                        quantity: 1,
                        productId: action.payload.id,
                    }
                ]
            }
        case REMOVE_TO_CART:
            return state.filter((p) => 
            //เป็นเงื่อนไขที่เก็บไว้ 
            p.id !== action.payload );
        case INCREASE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    };
                } else {
                    return product;
                }
            });
        case DECREASE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    };
                } else {
                    return product;
                }
            });
        default:
            return state;
    }
};

export default cartReducer;