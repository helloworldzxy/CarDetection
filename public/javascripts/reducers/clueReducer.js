import TYPE from '../../../conf/type.js';
import $ from 'jquery';

const initState = {
	totalCount: 0,
	currentPage: 0,
	status: false,
	result: [],
	deleteList: '',
};

export const clueReducer = (state = initState, action) => {
	switch(action.type){
		case TYPE.PAGE:
			return Object.assign({}, state, {
				currentPage: action.data.currentPage,
				status: false,
				result: []
			});
		case TYPE.CLUE:
			return Object.assign({}, state, {
				totalCount: action.data.clueCount,
				result: action.data.result,
				status: true,
			});
		case TYPE.DELETE:
			var deleteList = state.deleteList;

			if(action.data.deleteType){
				deleteList = action.data.deleteList.join(',') + ',';
			}else{
				if(action.data.deleteAction){
					deleteList += action.data.deleteList.join(',') + ',';
				}else{
					deleteList += deleteList.replace(action.data.deleteList.join(',') + ',' + '');
				}
			}

			return Object.assign({}, state, {
				deleteList: deleteList,
			});
		case TYPE.DELETEEMPTY:
			var deleteArray = state.deleteList.substr(0, state.deleteList.length -1).split(',');
			for(var i in deleteArray){
				if(deleteArray.hasOwnProperty(i)){
					$('#checkbox_' + deleteArray[i])[0].checked = false;
				}
			}
			return Object.assign({}, state, {
				deleteList: '',
			});
		default:
			return state;
	}
};