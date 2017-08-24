import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ""
		}
	}
	render() {
		return (
			<div>
			<h1>Un repetidor</h1>
			<input type="text" onChange={this.updateValue.bind(this)} value={this.state.value} placeholder="Empieza a escribir algo" />
			<p className="repeater">{this.state.value}</p>
			</div>
		);
	}

	updateValue(e) {
		this.setState({
			value: e.target.value
		})
	}
}

export default App;
