import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component{

	static propTypes = {
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		onClick: PropTypes.func.isRequired
	}

	render(){

		let { id, text, completed, onClick } = this.props;

		return (
			<li
				style={{ textDecoration: completed ? 'line-through' : 'none'}}
				onClick={ this.handleClick.bind(this, {id: id}) }
			>{text}</li>
		);
	}

	handleClick(e, params){

		this.props.onClick(e, params);
	}
}

export default Todo;