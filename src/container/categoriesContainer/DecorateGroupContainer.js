import React from 'react';
import DecorateGroup from '../../component/categories/decorateGroup';
import { connect } from 'react-redux';
import * as actions from '../../action/actions';

const categoriesContainer = (props) => {
    return (<DecorateGroup {...props} />)
}

const mapStateToProps = (state) => ({
  addToCartReducer: state.addToCartReducer
})

const mapDispatchToProps = (dispatch) => ({
  addToCartReducer: (arr) => dispatch(actions.addToCartReducer(arr))
})

export default connect(mapStateToProps, mapDispatchToProps)(categoriesContainer);
