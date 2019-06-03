import React from "react";
import { Card } from "semantic-ui-react";
import ForexCurrencyCard from "./ForexCurrencyCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCurrency, removeCurrency } from "../actions/CurrencyActions";

function ForexBody({ fetchCurrency, removeCurrency, rates }) {
  React.useEffect(() => {
    fetchCurrency();
  }, []);

  function removeCurrencyFromList(sym) {
    removeCurrency(sym);
  }

  return (
    <Card.Content className="list-container">
      {rates &&
        rates.map(
          rate =>
            rate.show && (
              <ForexCurrencyCard
                rate={rate}
                removeCurrencyFromList={removeCurrencyFromList}
                key={rate.name}
              />
            )
        )}
    </Card.Content>
  );
}

ForexBody.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
  removeCurrency: PropTypes.func.isRequired,
  rates: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    rates: state.rates || []
  };
};

export default connect(
  mapStateToProps,
  { fetchCurrency, removeCurrency }
)(ForexBody);
