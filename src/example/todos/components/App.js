import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
// const App = () => (

// 	<div>
// 		<AddTodo />
// 	</div>
// );
class App extends Component{

	static propTypes = {
		todos: PropTypes.array,
	}

	render(){
		console.log(this.props.todos);
		return (
			<div>
				<AddTodo />
				<TodoList />
			</div>
		)
	}
}

export default App;