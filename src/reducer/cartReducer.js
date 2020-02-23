import { ADD_TO_CART, REMOVE_FROM_CART, PLUS_CART_QUANTITY } from '../action/actionsType';

const initialState = {
    cart: []
}


const cartReducer = (state = initialState, actions) => {
    let cart = state.cart;
    let product = actions.payload
    switch (actions.type) {
        case ADD_TO_CART:
            let checkHasItem = cart.find(item => item.id === product.id)
            if (checkHasItem === undefined) {
                cart.push(product)
                return {
                    ...state,
                    cart: cart
                }
            } else {
                let newCart = cart.filter(item => item.id !== product.id)
                checkHasItem.quantity += product.quantity;
                newCart.push(checkHasItem);
                return {
                    ...state,
                    cart: newCart
                };
            }
            
        case PLUS_CART_QUANTITY:
            return {
                ...state,
                cart: cart
            }

        case REMOVE_FROM_CART:
            let newCart = cart.filter(item => item.id !== product.id)
            return {
                ...state,
                cart: newCart
            }

        default:
            return state
    }
}

export default cartReducer;