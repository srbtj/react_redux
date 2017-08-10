import React, {Component} from 'react';
import PropTypes from 'prop-types';
class AddTodo extends Component{

	static PropTypes = {
		onSubmitHandle: PropTypes.func.isRequire
	}

	render(){
		return (

			<div>
				<form onSubmit={ this.submitData.bind(this) }>
					<input ref="input" type="text"/>
					<button type="submit">Add Todo</button>
				</form>
			</div>
		)
	}

	submitData(e){
		e.preventDefault();
		let oInput = this.refs.input;
		let _val = oInput.value.trim();
		if(!_val) return;
		this.props.onSubmitHandle(_val)
		oInput.value="";
	}
}

export default AddTodo;