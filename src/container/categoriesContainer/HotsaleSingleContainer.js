import React from 'react';
import HotsaleSingle from '../../component/categories/hotsaleSingle';
import { connect } from 'react-redux';
import * as actions from '../../action/actions';

const categoriesContainer = (props) => {
    return (<HotsaleSingle {...props} />)
}

const mapStateToProps = (state) => ({
  addToCartReducer: state.addToCartReducer
})

const mapDispatchToProps = (dispatch) => ({
  addToCartReducer: (arr) => dispatch(actions.addToCartReducer(arr))
})

export default connect(mapStateToProps, mapDispatchToProps)(categoriesContainer);
