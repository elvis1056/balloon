import { IS_LOGIN, IS_LOGOUT } from './actionsType';

export const isLoginReducer = (data) => {
    return {
        type: IS_LOGIN,
        payload: { 
            isLogin: true,
        }
    }
}

export const isLogoutReducer = () => {
    return {
        type: IS_LOGOUT,
        payload: {
            isLogin: false,
        }
    }
}
