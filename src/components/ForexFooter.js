import React, { Component } from "react";
import { Card, Icon, Button, Dropdown } from "semantic-ui-react";
import { Currencies } from "../constants";
import { connect } from "react-redux";
import { addCurrency } from "../actions/CurrencyActions";
import PropTypes from "prop-types";

class ForexFooter extends Component {
  state = {
    showInput: false,
    currency: ""
  };

  inputCurrencyOnChange = (event, data) => {
    this.setState({ currency: data.value });
  };

  toggleShowInput = () => {
    this.setState({ showInput: !this.state.showInput });
  };

  onSubmit = () => {
    this.toggleShowInput();
    this.props.addCurrency(this.state.currency);
  };

  renderInput = () => (
    <div className="flex-between">
      <div style={{ flex: 1, marginRight: "4px" }}>
        <Dropdown
          placeholder="Select Currency"
          fluid
          selection
          options={Currencies}
          upward={true}
          onChange={this.inputCurrencyOnChange}
        />
      </div>
      <Button animated="vertical" onClick={this.onSubmit}>
        <Button.Content hidden>Submit</Button.Content>
        <Button.Content visible>
          <Icon name="add" />
        </Button.Content>
      </Button>
    </div>
  );

  renderButton = () => (
    <Button
      content="Add More Currencies"
      icon="plus"
      labelPosition="left"
      fluid
      onClick={this.toggleShowInput}
      className="btn-more"
    />
  );

  render() {
		const { showInput } = this.state;
    return (
      <Card.Content>
        {!showInput ? this.renderButton() : this.renderInput()}
      </Card.Content>
    );
  }
}

ForexFooter.propTypes = {
  addCurrency: PropTypes.func.isRequired
};

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
