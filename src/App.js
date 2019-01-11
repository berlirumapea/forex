import React, { Component } from 'react'
import { Card } from "semantic-ui-react";
import ForexHeader from './components/ForexHeader';
import ForexBody from './components/ForexBody';
import ForexFooter from './components/ForexFooter';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Card className="container">
						<ForexHeader />
						<ForexBody />
						<ForexFooter />
					</Card>
				</div>
			</Provider>
		)
	}
}

export default App;