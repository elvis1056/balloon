import React from 'react';
import Checkout from '../../component/checkout/Checkout';
import { connect } from 'react-redux';
import * as actions from '../../action/actions';
import * as orderer from '../../action/orderer';
// import * as authActions from '../action/authToken';
// import * as loginAction from '../action/loginAction';
import { withRouter } from 'react-router-dom';

const CheckoutContainer = (props) => {
    return (<Checkout {...props} />)
}

const mapStateToProps = (state) => ({
    cartReducer: state.cartReducer,
    authTokenReducer: state.authTokenReducer,
    ckeckReducer: state.ckeckReducer,
    ordererReducer: state.ordererReducer,
})

const mapDispatchToProps = (dispatch) => ({
    removeCartReducer: (arr) => dispatch(actions.removeCartReducer(arr)),
    addOrderReducer: (data) => dispatch(orderer.addOrderReducer(data)),
    // unsetTokenReducer: () => dispatch(authActions.unsetTokenReducer()),
    // isLoginReducer: () => dispatch(loginAction.isLoginReducer()),
    // isLogoutReducer: () => dispatch(loginAction.isLogoutReducer()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer));
