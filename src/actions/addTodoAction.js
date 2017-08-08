import * as AC from '../constant/actions';
/**

	添加数据的 action创建函数

	返回 action
**/
export function addTodo(text){
	return {
		type: AC.ADD_TODO,
		preloader: {
			text
		}
	}
}