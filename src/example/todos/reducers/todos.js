import * as Const from '../constant';
let obj = [{
	id: 0,
	text: '123456',
	completed: false
}];

const todos = (state = obj, action) => {

	switch (action.type) {

		case Const.ADD_TODO:
			return [
				...state, {
					id: action.id,
					text: action.text,
					completed: false
				}
			];

		case Const.TOGGLE_TODO:
			return state.map( (todo) => {
				return (todo.id == action.id ) ? { ...todo, completed: !todo.completed } : todo;
			});

		default:
			return state;
	}
}

export default todos;