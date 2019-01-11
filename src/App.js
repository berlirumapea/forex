import React, { Component } from 'react'
import { Card } from "semantic-ui-react";
import ForexHeader from './components/ForexHeader';
import ForexBody from './components/ForexBody';
import ForexFooter from './components/ForexFooter';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Card className="container">
					<ForexHeader />
					<ForexBody />
					<ForexFooter />
				</Card>
			</div>
		)
	}
}

export default App;