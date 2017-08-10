import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../actions';
import AddTodo from '../components/AddTodo';

// let AddTodoStore = ( {dispatch} ) => {


// 	return (
// 		<div>
// 			<form onSubmit={ e => {
// 				e.preventDefault()
// 				if(!input.value.trim()){
// 					return;
// 				}
// 				dispatch(addTodo(input.value))
// 				input.value=''
// 			}}>
// 				<input ref={ node => { input = node }} />
// 				<button type="submit">Add Todo</button>
// 			</form>
// 		</div>
// 	);
// }

// AddTodo = connect()(AddTodo);

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitHandle(val){
			dispatch( addTodo(val) );
		}
	}
}

let AddTodoStore = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo);

export default AddTodoStore;