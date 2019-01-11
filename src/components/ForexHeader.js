import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateUSDValue } from '../actions/CurrencyActions';

class ForexHeader extends Component {

	state = {
		val: 10.00
	}

	onChange = (e) => {
    this.setState({ val: e.target.value});
    this.props.updateUSDValue(e.target.value);
  } 

  render() {
    return (
      <Card.Content>
        {/* <Card.Header> */}
          <p id="fa_title">USD - United State Dollars</p>
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
        {/* </Card.Header> */}
      </Card.Content>
    );
  }
}

ForexHeader.propTypes = {
  updateUSDValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, { updateUSDValue })(ForexHeader);
