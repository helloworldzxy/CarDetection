

const initState = {
	searching: false,
    status: false,
    beginTime: 0,
    endTime: 0,
    taskID: 0,
    statusRemote: 0,
    result: [],
    currentPage: 0,
    totalCount: 0,
    detail: false,
    detailData: {},
    imagePath: {},
    cropCoord: {},
};

export const searchReducer = (state = initState, action) => {
	console.log('searchReducer');

	return state;
};