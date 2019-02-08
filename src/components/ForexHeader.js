import React from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateUSDValue } from '../actions/CurrencyActions';

function ForexHeader({updateUSDValue}) {

  const [val, setVal] = React.useState(10.00);
  
  function onChange(e) {
    setVal(e.target.value);
    updateUSDValue(e.target.value);
  }

  return (
    <Card.Content>
      <p id="fa_title">USD - United State Dollars</p>
      <div className="flex-between">
        <h3 className="bold">USD</h3>
        <input
          value={val}
          type="number"
          step="0.01"
          onChange={onChange}
          autoFocus
          className="usd"
        />
      </div>
    </Card.Content>
  )
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
