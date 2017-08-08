/**

	Action只描述了有事情发生这一事实，并没有指明应用该如何更新state,
		而 reducer 就是指明该如何更新 state,  接收两个参数 ：（state, action）


	reducer 是一个纯函数， 接收旧的 state 和 action ,  返回一个新的 state;
**/

import { combineReducers } from 'redux';
import {addTodoReducer} from './addTodoReducer';

const Reducers = combineReducers({
	addTodoReducer
});

export {Reducers};
