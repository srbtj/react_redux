/**
	redux 中 action
	作用： 把数据从应用传到 store 的有效载体， 是store 的唯一数据来源;
		   通过  store.dispatch() 将action 传到 store;


	action创建函数：
		action创建函数就是生成 action 的方法;


	发起一次 dispatch 过程：

		redux中 只需要将 action 创建函数 的 结果传入 dispatch() 方法中 即可发送一次 dispatch 过程;


	store 中  直接通过  store.dispatch() 调用 dispatch() 方法，  但是大多数情况下  使用  react-redux 中提供的  connect() 帮助器 来调用;


	Action数据格式：
		{
			type: '',
			preloader: {}
		}
*/

import { addTodo } from './addTodoAction';

const Actions = {
	addTodo
}


export  { Actions } ;