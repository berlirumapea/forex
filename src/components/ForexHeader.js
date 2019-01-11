import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class ForexHeader extends Component {

	state = {
		val: 10.00
	}

	onChange = (e) => this.setState({ val: e.target.value});

  render() {
    return (
      <Card.Content>
        <Card.Header>
          <p id="title">USD - United State Dollars</p>
          <div className="flex-between">
            <h3 className="bold">USD</h3>
            <input
              value={this.state.val}
              type="number"
              step="0.01"
              onChange={this.onChange}
							autoFocus
							className="usd"
            />
          </div>
        </Card.Header>
      </Card.Content>
    );
  }
}
