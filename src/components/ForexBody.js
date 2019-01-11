import React, { Component } from 'react'
import { Card } from "semantic-ui-react";
import ForexCurrencyCard from './ForexCurrencyCard';

export default class ForexBody extends Component {
	render() {
		return (
			<Card.Content className="list-container">
				<ForexCurrencyCard />
      </Card.Content>
		)
	}
}
