import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import ForexCurrencyCard from "./ForexCurrencyCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCurrency, removeCurrency } from "../actions/CurrencyActions";

class ForexBody extends Component {
  componentDidMount() {
    this.props.fetchCurrency();
  }

  removeCurrencyFromList = symbol => {
    this.props.removeCurrency(symbol);
  };

  render() {
    return (
      <Card.Content className="list-container">
        {this.props.rates &&
          this.props.rates.map(
            rate =>
              rate.show && (
                <ForexCurrencyCard
                  rate={rate}
                  removeCurrencyFromList={this.removeCurrencyFromList}
                  key={rate.name}
                />
              )
          )}
      </Card.Content>
    );
  }
}


ForexBody.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
  removeCurrency: PropTypes.func.isRequired,
  rates: PropTypes.array.isRequired
};

// get current state from state tree and map it to props 
const mapStateToProps = state => {
  return {
    rates: state.rates || []
  };
};

export default connect(
  mapStateToProps,
  { fetchCurrency, removeCurrency }
)(ForexBody);
