import React, { Component } from 'react';

import TextControl from '../../../components/TextControl/TextControl'
import './Home.css'

class Home extends Component {

	state = {
		content: 'some other value'
	}

	saveHandler = () => {
		console.log(this.state.content)
	}

	changedHandler = (event) => {
		this.setState({ content: event.target.value })
	}

	render() {
		return(
			<div className="Homex">
				<h1>Home </h1>
				<TextControl
					content={this.state.content}
					save={this.saveHandler}
					changed={this.changedHandler}/>
			</div>
		)
	}
}

export default Home;
