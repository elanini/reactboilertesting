import React, { Component } from 'react';
import TodoList from './TodoList'
import TodoItemForm from './TodoItemForm'

export default class TodoBox extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
		this.getTodoItems = this.getTodoItems.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getTodoItems() {
	    fetch('http://localhost:3000/api/TodoItems')
	    	.then(res=> { 
	    		return res.json();
	    	}).then(json=> {
	    		this.setState({data: json})
	    	})
	}
	handleSubmit(item) {
		fetch('http://localhost:3000/api/TodoItems', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
    			'Content-Type': 'application/json'
			},
			body: JSON.stringify({ text: item.text, isComplete: false})
		}).then(res=> {
			console.log("success")
			this.getTodoItems();
		}).catch(err=> {
			console.log(err)
		})
		
	}

	handleItemChange(item) {
		console.log(item);
		fetch('http://localhost:3000/api/TodoItems', {
			method: 'put',
			headers: {
				'Accept': 'application/json',
    			'Content-Type': 'application/json'
			},
			body: JSON.stringify({ text:item.text, isComplete: item.checked, id: item.id})
		}).then(res=> {
			console.log("success")
		}).catch(err=> {
			console.log(err)
		})
	}

	componentDidMount() {
		this.getTodoItems();
	}

	render() {
		return (
			<div className="TodoBox">
				<h1> Todos </h1>
				<TodoList data={this.state.data} changeHandler={this.handleItemChange}/>
				<TodoItemForm onSubmit={this.handleSubmit}/>
			</div>
		)
	}
}