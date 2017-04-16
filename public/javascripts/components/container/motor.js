import React, { Component, PorpTypes } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import {reducer as formReducer } from 'redux-form';

import SearchMotorForm from '../display/searchMotorForm.js';

import { searchReducer } from '../../reducers/search.js';

const reducers = {
	form: formReducer,
	search: searchReducer,
}

export default class Motor extends Component {
	render() {
		return (
			<Provider store={createStore(combineReducers(reducers), applyMiddleware(thunk))}>
				<div>
					<div className="searchBanner">查询条件</div>
					<SearchMotorForm/>
				</div>
			</Provider>
		);
	}
}