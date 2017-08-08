import * as AC from '../constant/actions';

/**
	添加数据的 reducer
**/
export function addTodoReducer(state=[], action){
	switch(action.type){
		case AC.ADD_TODO:
			return Object.assign({}, state, action.preloader);
		default:
			return state;
	}
}