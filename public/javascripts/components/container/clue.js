import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import ClueList from '../display/clueList.js';
import ClueButton from '../display/clueButton.js';

import { clueReducer } from '../../reducers/clueReducer.js';
import { result } from '../../models/clueResult.js';
import TYPE from '../../../../conf/type.js';


const reducers = {
	clue: clueReducer
};

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class Clue extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		store.dispatch( result(TYPE.CLUE, 0) );
	}

	render() {
		return (
			<Provider store={store}>
				<div className="clearfix">
					<div className="clueList">
						<ClueList/>
					</div>
					<div className="clueButton">
						<ClueButton/>
					</div>
				</div>
			</Provider>
		)
	}
}