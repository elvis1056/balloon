import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import authTokenReducer from './authTokenReducer';
import ckeckReducer from './ckeckReducer';
import ordererReducer from './ordererReducer';

const allReducers = combineReducers({
    cartReducer: cartReducer,
    authTokenReducer: authTokenReducer,
    ckeckReducer: ckeckReducer,
    ordererReducer: ordererReducer,
})

export default allReducers;
