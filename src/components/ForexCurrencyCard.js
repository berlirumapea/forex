import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function ForexCurrencyCard({ rate, removeCurrency }) {
  let formatedRateTotal = new Intl.NumberFormat().format(rate.rateTotal);
  let formatedRateValue = new Intl.NumberFormat().format(rate.rateVal);
  return (
    <Card className="list-item">
      <Card.Content>
        <div className="flex-between">
          <h3>{rate.name}</h3>
          <h3>{formatedRateTotal}</h3>
        </div>
        <p className="italic semibold">
          {rate.name} - {rate.desc}
        </p>
        <div className="flex-between">
          <p className="italic">
            1 USD = {rate.name} {formatedRateValue}
          </p>
          <Icon
            name="trash alternate outline"
            style={{ cursor: "pointer" }}
            onClick={() => removeCurrency(rate.name)}
            className="delete-icon"
          />
        </div>
      </Card.Content>
    </Card>
  );
}
