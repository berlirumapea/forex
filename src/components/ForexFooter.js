import React from "react";
import { Card, Icon, Button, Dropdown } from "semantic-ui-react";
import { Currencies } from "../constants";
import { connect } from "react-redux";
import { addCurrency } from "../actions/CurrencyActions";
import PropTypes from "prop-types";

function ForexFooter({addCurrency}) {
  const [showInput, setShowInput] = React.useState(false);
  const [currency, setCurrency] = React.useState('');

  function inputCurrencyOnChange(e, data) {
    setCurrency(data.value);
  }

  function toggleShowInput() {
    setShowInput((prev) => !prev);
  }

  function onSubmit() {
    toggleShowInput();
    addCurrency(currency);
  }

  function renderInput() {
    return (
      <div className="flex-between">
        <div style={{ flex: 1, marginRight: "4px" }}>
          <Dropdown
            placeholder="Select Currency"
            fluid
            selection
            options={Currencies}
            upward={true}
            onChange={inputCurrencyOnChange}
          />
        </div>
        <Button animated="vertical" onClick={onSubmit}>
          <Button.Content hidden>Submit</Button.Content>
          <Button.Content visible>
            <Icon name="add" />
          </Button.Content>
        </Button>
      </div>
    )
  }

  function renderButton() {
    return (
      <Button
        content="Add More Currencies"
        icon="plus"
        labelPosition="left"
        fluid
        onClick={toggleShowInput}
        className="btn-more"
      />
    )
  }

  return (
    <Card.Content>
        {!showInput ? renderButton() : renderInput()}
    </Card.Content>
  )
}


ForexFooter.propTypes = {
  addCurrency: PropTypes.func.isRequired
};

// get current state from state tree and map it to props 
const mapStateToProps = state => {
  return {
    rates: state.rates,
    defaultVal: state.default_USD_Val
  };
};

export default connect(
  mapStateToProps,
  { addCurrency }
)(ForexFooter);
