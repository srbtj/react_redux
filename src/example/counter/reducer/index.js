import * as Const from '../constant';
export function counterInfo(state = 0, action){

	switch(action.type){
		case Const.INCREMENT:

			return state + 1;

		case Const.DECREMENT:

			return state - 1;

		default:
			return state;
	}
}