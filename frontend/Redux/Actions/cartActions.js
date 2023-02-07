import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

export const addToCART = (playload) => {
    return {
        type: ADD_TO_CART,
        playload
    }
}

export const removeFromCart = (playload) => {
    return {
        type: REMOVE_FROM_CART,
        playload
    }
}

export const clearCart = (playload) => {
    return {
        type: CLEAR_CART,
    }
}