import { SET_TOKEN, UNSET_TOKEN } from './actionsType';

export const setTokenReducer = (token) => {
    return {
        type: SET_TOKEN,
        payload: {
            token,
        }
    }
}

export const unsetTokenReducer = () => {
    return {
        type: UNSET_TOKEN,
        payload: {
            token: '',
        }
    }
}
