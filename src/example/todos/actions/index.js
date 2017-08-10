import * as Const from '../constant';
let nextTodoId = 1;
export const addTodo = (text) => ({
	type: Const.ADD_TODO,
	id: nextTodoId++,
	text
});

export const todoListObj = {

	toggleTodo: (id) => {
		return {
			type: Const.TOGGLE_TODO,
			id
		}
	}
}