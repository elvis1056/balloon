import { ADD_TO_CART, REMOVE_FROM_CART, PLUS_CART_QUANTITY } from './actionsType';

export const addToCartReducer = (arr) => {
    return {
        type: ADD_TO_CART,
        payload: { 
            ...arr,
            quantity: 1 
        }
    }
}

export const removeCartReducer = (arr) => {
    return {
        type: REMOVE_FROM_CART,
        payload: arr
    }
}

export const plusCartQuantityReducer = (arr) => {
    return {
        type: PLUS_CART_QUANTITY,
        payload: {
            ...arr,
            quantity: 1
        }
    }
}
