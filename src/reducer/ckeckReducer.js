import { IS_LOGIN, IS_LOGOUT } from '../action/actionsType';

const initialState = {
    isLogin: false
}


const ckeckReducer = (state = initialState, actions) => {
    let payload = actions.payload
    switch (actions.type) {
        case IS_LOGIN:
            if (payload.isLogin) {
                return {
                    ...state,
                    isLogin: true
                }
            }
            break
            
        case IS_LOGOUT:
            return {
                ...state,
                isLogin: false
            }

        default:
            return state
    }
}

export default ckeckReducer;
