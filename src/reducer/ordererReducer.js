import { ADD_ORDERER } from '../action/actionsType';

const initialState = {
    orderer: {},
}


const ordererReducer = (state = initialState, actions) => {
    let payload = actions.payload
    switch (actions.type) {
        case ADD_ORDERER:
            if (payload) {
                return {
                    ...state,
                    orderer: payload.data
                }
            }
            break

        default:
            return state
    }
}

export default ordererReducer;
