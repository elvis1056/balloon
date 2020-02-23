import React from 'react';
import Payment from '../../component/payment/Payment';
import { connect } from 'react-redux';
// import * as actions from '../action/actions';
// import * as authActions from '../action/authToken';
// import * as loginAction from '../action/loginAction';
import { withRouter } from 'react-router-dom';

const PaymentContainer = (props) => {
    return (<Payment {...props} />)
}

const mapStateToProps = (state) => ({
    cartReducer: state.cartReducer,
    authTokenReducer: state.authTokenReducer,
    ckeckReducer: state.ckeckReducer,
    ordererReducer: state.ordererReducer,
})

const mapDispatchToProps = (dispatch) => ({
    // removeCartReducer: (arr) => dispatch(actions.removeCartReducer(arr)),
    // unsetTokenReducer: () => dispatch(authActions.unsetTokenReducer()),
    // isLoginReducer: () => dispatch(loginAction.isLoginReducer()),
    // isLogoutReducer: () => dispatch(loginAction.isLogoutReducer()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentContainer));
