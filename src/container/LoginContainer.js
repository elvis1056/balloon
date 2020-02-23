import React from 'react';
import Login from '../component/nav/Login';
import { connect } from 'react-redux';
import * as actions from '../action/authToken';
import * as loginAction from '../action/loginAction'
import { withRouter } from 'react-router-dom';

const LoginContainer = (props) => {
    return (<Login {...props} />)
}

const mapStateToProps = (state) => ({
    authTokenReducer: state.authTokenReducer,
    ckeckReducer: state.ckeckReducer,
})

const mapDispatchToProps = (dispatch) => ({
    setTokenReducer: (data) => dispatch(actions.setTokenReducer(data)),
    isLoginReducer: () => dispatch(loginAction.isLoginReducer()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));
