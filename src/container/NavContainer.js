import React from 'react';
import Nav from '../component/nav/Nav';
import { connect } from 'react-redux';
import * as actions from '../action/actions';
import * as authActions from '../action/authToken';
import * as loginAction from '../action/loginAction';
import { withRouter } from 'react-router-dom';

const NavContainer = (props) => {
    return (<Nav {...props} />)
}

const mapStateToProps = (state) => ({
    cartReducer: state.cartReducer,
    authTokenReducer: state.authTokenReducer,
    ckeckReducer: state.ckeckReducer,
})

const mapDispatchToProps = (dispatch) => ({
    removeCartReducer: (arr) => dispatch(actions.removeCartReducer(arr)),
    unsetTokenReducer: () => dispatch(authActions.unsetTokenReducer()),
    isLoginReducer: () => dispatch(loginAction.isLoginReducer()),
    isLogoutReducer: () => dispatch(loginAction.isLogoutReducer()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer));
