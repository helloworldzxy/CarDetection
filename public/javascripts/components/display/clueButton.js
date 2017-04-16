import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Field, reduxForm } from 'redux-form';
import $ from 'jquery';

import Pagination from '../display/clPagination.js';
import TYPE from '../../../../conf/type.js';

import { destroy } from '../../models/clueResult.js';

class ClueReduxList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('ClueReduxList render this.props', this.props);
        const { status, result, clueDelete } = this.props;

        return (
            status && result && result.length ?
            <div>
                <button onClick={clueDelete}>批量删除</button>
                <button>批量保存</button>
                <button>归档</button>
                <button>轨迹分析</button>
            </div> :
            null
        );
    }
}

const ClueList = connect(
    state => {
        // Map Redux state to component props
        console.log('ClueList connect state', state);
        return state.clue;
    },
    dispatch => {
        // Map Redux actions to component props
        return {
            clueDelete: (event) => {
                console.log('ClueList clueDelete event', event);
                dispatch(destroy(TYPE.DELETE, false));
            },
        };
    }
)(ClueReduxList);

export default ClueList;


