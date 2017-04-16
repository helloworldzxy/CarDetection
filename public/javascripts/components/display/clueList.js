import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleWare } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Field, reduxForm } from 'redux-form';
import $ from 'jquery';

import Pagination from '../display/clPagination.js';
import TYPE from '../../../../conf/type.js';
import moment from '../../libs/moment.js';
import { defaultImgUrl } from '../../../../conf/default.js';

import { destroy } from '../../models/clueResult.js';

class ClueReduxList extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { status, result, clueDelete, clueSelect, imageLoadError } = this.props;

		return (
			!status ?
			<div className="submitTipes">正在加载...</div> : 
			status && result && result.length ? 
				<div>
					<div className="clearfix">
					{
						result.map(function(item, key){
							return <ClueItem item={item} key={key}
							clueDelete={clueDelete} clueSelect={clueSelect}
							imageLoadError={imageLoadError} />
						})
					}
					</div>
					<div className="pageContainer">
						<Pagination type={TYPE.CLUE} />
					</div>
				</div> : 
				<div className="submitTips">搜索结果为空</div>
		);
	}
}

class ClueItem extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { key, item, clueDelete, clueSelect, imageLoadError } = this.props;

		return (
			<li className="clue-item" key={key} id={item.id}>
				<div className="clue-img">
					<img src={item.featureImg} onError={imageLoadError} />
				</div>
				{
					item.targetType == 1 ?
						<div className="clue-info">
							<div>{item.motorInfo.motorNo}</div>
							<div>{moment(item.motorInfo.createTs)}</div>
							<div>{item.motorInfo.location}</div>
							<div>{item.motorInfo.color} {item.motorInfo.motorType} {item.motorInfo.brand}</div>
							<div>{item.motorInfo.hasOther ? '有副驾驶' : '无副驾驶'}</div>
						</div> :
					item.targetType == 2 ?
						<div className="clue-info">
							<div>{item.mptorInfo.motorNo}</div>
							<div>{moment(item.motorInfo.createTs)}</div>
							<div>{item.motorInfo.location}</div>
						</div> : 
					item.targetType == 3 ?
						<div className="clue-info">
							<div>{item.mptorInfo.motorNo}</div>
							<div>{moment(item.motorInfo.createTs)}</div>
							<div>{item.motorInfo.location}</div>
						</div> : 
						<div className="clue-info">
						</div>
				}
				<div className="clue-left">
					<input type="checkbox" id={'checkbox_' + item.id} onChange={clueSelect}/>
					<label>选中</label>
				</div>
				<div className="clue-right">
					<button onClick={clueDelete}>删除</button>
				</div>
			</li>
		);
	}
}


const ClueList = connect(
	state => {
		// Map Redux state to component props
		return state.clue;
	},
	dispatch => {
		// Map Redux actions to component props
		return {
			clueDelete: (event) => {
				let parent = $(event.target).parents('li')[0];
				dispatch(destroy(TYPE.DELETE, true, [parent.id]));
			},
			clueSelect: (event) => {
				let parent = $(event.target).parents('li')[0];
				if(event.target.checked){
					dispatch({
						type: TYPE.DELETE,
						data: {
							deleteType: false,
							deleteAction: true,
							deleteList: [parent.id],
						},
					});
				}else{
					dispatch({
						type: TYPE.DELETE,
						data: {
							deleteType: false,
							deleteAction: false,
							deleteList: [parent.id],
						}
					})
				}
			},
			imageLoadError: (event) => {
				event.target.src = defaultImgUrl;
			},
		};
	}
)(ClueReduxList);

export default ClueList;