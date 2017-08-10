import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component{

	static propTypes = {
		value: PropTypes.number.isRequired,
		onIncrement: PropTypes.func.isRequired,
		onDecrement: PropTypes.func.isRequired
	}

	constructor(props){

		super(props);

		this.state = {}
	}

	render() {
		const { value, onIncrement, onDecrement } = this.props;

		return (
			<div>
				<span>当前值: { value }</span>
				<button onClick={ this.increment.bind(this) }>+</button>
				<button onClick={ this.decrement.bind(this) }>-</button>
			</div>
		);
	}

	increment(){
		this.props.onIncrement();
	}

	decrement(){
		this.props.onDecrement();
	}
}