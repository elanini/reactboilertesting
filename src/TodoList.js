import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	constructor(props){
		super(props)
	}



	render() {
		var handler=this.props.changeHandler;
		var todoItems = this.props.data.map(function(item) {
			return (
				<div>
				<TodoItem text={item.text} isComplete={item.isComplete} id={item.id} changeHandler={handler}/>
				</div>
				)
		});
		return (
			<div>
			<h2>todos</h2>
			{todoItems}
			</div>
			);
	}
}
