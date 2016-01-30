import React, { Component } from 'react';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {checked: false, text:''};
		this.handleItemChange = this.handleItemChange.bind(this);
	}
	componentDidMount() {
		this.setState({checked: this.props.isComplete, text:this.props.text})
	}
	handleItemChange(e) {
		this.props.changeHandler({text: this.state.text, checked: e.target.checked, id: this.props.id});
		this.setState({checked: e.target.checked});
	}

	render() {
		return (
			<input type="checkbox" onChange={this.handleItemChange} checked={this.state.checked}> {this.state.text}</input>
		)
	}
}