import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleWare } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Field, reduxForm } from 'redux-form';

import Pager from 'react-pager';
import { result } from '../../models/clueResult.js';

class PaginationRedux extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { totalCount, currentPage, handlePageChanged } = this.props;

		const totalPage = Math.ceil(totalCount / 10);
		const visiblePages = 5;

		return (
			<Pager 
				total={totalPage}
				current={currentPage}
				visiblePages={visiblePages}
				titles={ { first: '首页', last: '末页', prev: '上一页', next: '下一页'}}
				onPageChanged={handlePageChanged}
			/>
		);
	}
}

const Pagination = connect(
	state => {
		// Map Redux state to component props
		return state.clue;
	},
	(dispatch, ownProps) => {
		// Map Redux actions to component props
		return {
			handlePageChanged: (newPage) => {
				dispatch(result(ownProps.type, newPage));
			},
		};
	}
)(PaginationRedux);

export default Pagination;