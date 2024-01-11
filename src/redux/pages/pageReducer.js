const HOME = 'HOME';
const CART = 'CART';

const initialState ={
    HOME: true
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME:
            return { HOME: true };
        case CART:
            return { HOME: false };
        default:
            return state;
    }
}

export default pageReducer;