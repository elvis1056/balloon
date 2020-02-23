import React from 'react';
import NavCart from '../component/nav/NavCart';
import { connect } from 'react-redux';
import * as actions from '../action/actions';

const NavCartContainer = (props) => {
    return (<NavCart {...props} />)
}

const mapStateToProps = (state) => ({
    cartReducer: state.cartReducer
})

const mapDispatchToProps = (dispatch) => ({
    removeCartReducer: (arr) => dispatch(actions.removeCartReducer(arr)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavCartContainer);
