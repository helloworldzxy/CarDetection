import $ from 'jquery';
import APIURL from '../../../conf/apiUrl.js';
import TYPE from '../../../conf/type.js';

var Promise = require('es6-promise').Promise;

function actionCreator(type, data){
	return { type, data };
}

function handleDispatch(dispatch, type, data){
	dispatch(actionCreator(type, data));
}

function handleAsyncDispatch(dispatch, type, data){
	return new Promise(function (resolve, reject){
		handleDispatch(dispatch, type, data);
		resolve();
	});
}

function getClueList(dispatch, getState){
	return new Promise(function(resolve, reject){
		let { currentPage, status } = getState().clue,

			data = Object.assign({}, {
				p: currentPage + 1,
			});



		$.ajax({
			type: 'GET',
			url: APIURL.CLUE_LIST_URL,
			data: data,
			success: function(res){
				if(res.statusCode === 0){
					handleDispatch(dispatch, TYPE.CLUE, res);
					resolve();
				}else{
					reject();
				}
			},
			error: function(err){
				console.log('getClueList error: ', err);
			},
		});
	});
}

function deleteClue(dispatch, getState){
	return new Promise(function(resolve, reject){
		let { deleteList} = getState().clue,
			data = Object.assign({}, {
				clueids: deleteList.substr(0, deleteList.length - 1),
			});

		$.ajax({
			type: 'GET',
			url: APIURL.CLUE_DELETE_URL,
			data: data,
			beforeSend: function(){
				handleDispatch(dispatch, TYPE.DELETEEMPTY);
			},
			success: function(res){
				if(res.statusCode === 0){
					alert('删除线索成功！');
					getClueList(dispatch, getState);
				}else{
					reject();
				}
			},
			error: function(err){
				console.log('deleteClue error: ', err);
			},
		});
	});
}

function addClue(dispatch, getState){
	return new Promise(function(resolve, reject){
		let { addClue, taskID } = getState().search,
			data = Object.assign({}, {
				clueids: addClue,
				taskid: taskID,
			});

		$.ajax({
			type: 'GET',
			url: APIURL.CLUE_ADD_URL,
			data: data,
			beforeSend: function(){
				handleDispatch(dispatch, TYPE.SEARCH);
			},
			success: function(res){
				if(res.statusCode === 0){
					if(res.statusCode === 0){
						resolve();
					}else{
						reject();
					}
				}
			},
			error: function(err){
				console.log('addClue error: ', err);
			},
		});
	});
}

export const result = (type, page) => (dispatch, getState) => {

	let getResult = getClueList;

	switch(type){
		case TYPE.CLUE:
			getResult = getClueList;
			break;
	}

	handleAsyncDispatch(dispatch, TYPE.PAGE, {
		currentPage: page,
	})
		.then(function(){
			return getResult(dispatch, getState);
		})
		.catch(function(err){
			console.log("result handleAsyncDispatch error: ", err);
		});
};

export const destroy = (type, single, deleteList) => (dispatch, getState) => {
	if(single){
		handleAsyncDispatch(dispatch, TYPE.DELETE, {
			deleteType: true,
			deleteList: deleteList,
		})
			.then(function(){
				return deleteClue(dispatch, getState);
			})
			.catch(function(err){
				console.log("destroy single handleAsyncDispatch error: ", err);
			});
	}else{
		deleteClue(dispatch, getState)
			.catch(function(err){
				console.log("destroy not-single handleAsyncDispatch error: ", err);
			});
	}
};

export const add = (detail) => (dispatch, getState) => {
	if(detail){
		let { detailData } = getState().search;

		handleAsyncDispatch(dispatch, TYPE.ADD, {
			clueType: true,
			clueAction: true,
			clueKey: [detailData.id],
		})
			.then(function(){
				return addClue(dispatch, getState);
			})
			.catch(function(err){
				console.log("add detail handleAsyncDispatch error: ", err);
			});
	}else{
		addClue(dispatch, getState)
			.catch(function(error){
				console.log("add not-detail handleAsyncDispatch error: ", err);
			});
	}
};








