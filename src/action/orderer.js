import { ADD_ORDERER } from './actionsType';

export const addOrderReducer = (data) => {
    return {
        type: ADD_ORDERER,
        payload: {
            data,
        }
    }
}
