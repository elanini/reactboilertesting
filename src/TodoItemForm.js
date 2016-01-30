import React, { Component } from 'react';

export default class TodoItemForm extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''}
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleTextChange(e) {
		this.setState({text: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		var text = this.state.text.trim();
		if (!text){
			return;
		}
		this.props.onSubmit({text: text});
		this.setState({text: ''});
	}

	render() {
		return (
			<form className="TodoItemForm" onSubmit={this.handleSubmit}>
			<input onChange={this.handleTextChange} placeholder="buy milk" value={this.state.text}/>
			<input type="submit" value="Post"/>
			</form>
			)
	}
}