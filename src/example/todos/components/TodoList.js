import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component{

	static propTypes = {
		// todos: PropTypes.array.isRequired
		todos: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				text: PropTypes.string.isRequired,
				completed: PropTypes.bool.isRequired
			}).isRequired
		).isRequired,
		onTodoClick: PropTypes.func.isRequired
	}

	constructor(props){
		super(props);
		this.state={};
	}

	render(){

		let { todos, onTodoClick} = this.props;

		let items = todos.map( (todo) => {
			return (
				<Todo
					{...todo}
					key={todo.id}
					onClick={ (data) => {  onTodoClick(data.id) }}
				/>
			)
		})
		return (
			<ul>
				{ items }
			</ul>
		);
	}
}

export default TodoList;