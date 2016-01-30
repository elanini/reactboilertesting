import React, { Component } from 'react';

export default class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
				quote: 'A ronswanson quote will go here'
  	}
  	this.getQuote = this.getQuote.bind(this);
	}

	// makes request and sets the state
	getQuote() {
		var xmlhttp = new XMLHttpRequest();
		var url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
		var _that = this;
		xmlhttp.onreadystatechange = ()=> {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        var response = JSON.parse(xmlhttp.responseText);
		        // set the state
		        _that.setState({quote: response[0]})
		    }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	componentDidMount() {
		// call getQuote every 3 seconds
		setInterval(()=>{
			this.getQuote()
		}, 3000)
	}

  render() {
    return (
    		<h2>
	    		{
	    			this.state.quote
	    		}
    		</h2>
    );
  }
}