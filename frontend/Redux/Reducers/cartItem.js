
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './constants';

const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.playload]
        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem !== action.playload)
        case CLEAR_CART:
            return state = []
    }
    return state;                
}
export default cartItems;