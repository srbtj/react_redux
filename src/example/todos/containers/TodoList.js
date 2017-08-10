import React, { Component } from 'react';
import { connect } from 'react-redux';
//  actions
import TodoList from '../components/TodoList';
import {todoListObj} from '../actions';



const mapStateToProps = (state) => {

	return {
		todos: state.todos
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		onTodoClick: (id) => {
			dispatch(todoListObj.toggleTodo(id));
		}
	}
}

let TodoListStore = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default TodoListStore;