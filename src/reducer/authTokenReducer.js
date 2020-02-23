import { SET_TOKEN, UNSET_TOKEN } from '../action/actionsType';

const initialState = {
    token: ''
}


const authTokenReducer = (state = initialState, actions) => {
    let payload = actions.payload
    switch (actions.type) {
        case SET_TOKEN:
            if (payload.token) {
                return {
                    token: payload.token
                }
            }
            break
            
        case UNSET_TOKEN:
            return {
                token: '',
            }

        default:
            return state
    }
}

export default authTokenReducer;
